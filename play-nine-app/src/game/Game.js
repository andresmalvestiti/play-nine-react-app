import React from 'react';
import './Game.css';
import _ from 'lodash';
import Stars from '../starts/Stars';
import Button from '../button/Button';
import Answer from '../answer/Answer';
import Numbers from '../numbers/Numbers';
import DoneFrame from '../doneFrame/DoneFrame'

class Game extends React.Component {
  static randomNumber = () => 1 + Math.floor(Math.random()*9);
  state = {
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: 'Game over!',
  };
  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      answerIsCorrect: null,
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  unselectNumber = (clickedNumber) => {
      this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }));
  };
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars ===
      prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: Game.randomNumber(),
    }));
  };
  redraw = () => {
    if(this.state.redraws === 0){
      return;
    }
    this.setState(prevState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1,
    }));

  };
  render() {
    const { 
      selectedNumbers, 
      randomNumberOfStars,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus,
    } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button 
            selectedNumbers={selectedNumbers}
            redraws={redraws}
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            answerIsCorrect={answerIsCorrect}/>
          <Answer 
            selectedNumbers={selectedNumbers} 
            unselectNumber={this.unselectNumber} />
        </div>
        <br />
        {doneStatus ?
          <div className="row">
            <DoneFrame doneStatus={doneStatus} />
          </div> :
          <Numbers 
            selectedNumbers={selectedNumbers} 
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers} />
        }
      </div>
    );
  }
}

export default Game;

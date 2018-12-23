import React from 'react';
import './Game.css';
import _ from 'lodash';
import Stars from '../starts/Stars';
import Button from '../button/Button';
import Answer from '../answer/Answer';
import Numbers from '../numbers/Numbers';

class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    usedNumbers: [],
    answerIsCorrect: null,
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
      randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    }));
  };
  render() {
    const { 
      selectedNumbers, 
      randomNumberOfStars,
      answerIsCorrect,
      usedNumbers,
    } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button 
            selectedNumbers={selectedNumbers} 
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            answerIsCorrect={answerIsCorrect}/>
          <Answer 
            selectedNumbers={selectedNumbers} 
            unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers 
            selectedNumbers={selectedNumbers} 
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers} />
      </div>
    );
  }
}

export default Game;

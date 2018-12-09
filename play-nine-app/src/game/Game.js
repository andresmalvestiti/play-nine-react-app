import React from "react";
import "./Game.css";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import Stars from "../starts/Stars";
import Button from "../button/Button";
import Answer from "../answer/Answer";
import Numbers from "../numbers/Numbers";

class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  };
  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  }
  unselectNumber = (clickedNumber) => {
      this.setState(prevState => ({
        selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }));
  }
  render() {
    const { selectedNumbers, randomNumberOfStars } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers} 
            unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers} 
            selectNumber={this.selectNumber} />
      </div>
    );
  }
}

export default Game;

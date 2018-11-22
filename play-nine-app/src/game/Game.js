import React from 'react';
import './Game.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random()*9);

    // let stars = [];
    // for(let i=0;i<numberOfStars;i++){
    //     stars.push(<FontAwesomeIcon key={i} icon="star" className="star" />)
    // }
    return(
        <div className="col-5">
           {_.range(numberOfStars).map(i => 
                <FontAwesomeIcon key={i} icon="star" className="star" />
            )}
        </div>
    );
}

const Button = (props) => {
    return(
        <div className="col-2">
            <button type="button" class="btn btn-warning">=</button>
        </div>
    );
}

const Answer = (props) => {
    return(
        <div className="col-5">
            <span>5</span>
            <span>6</span>
        </div>
    );
}

const Numbers = (props) => {
    return(
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => 
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
}

Numbers.list = _.range(1,10);

class Game extends React.Component{
    render() {
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />
                <Numbers />
            </div>
        );
    }
}

export default Game;
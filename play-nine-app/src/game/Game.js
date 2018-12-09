import React from 'react';
import './Game.css';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import Stars from '../starts/Stars';
import Button from '../button/Button';
import Answer from '../answer/Answer';
import Numbers from '../numbers/Numbers';

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
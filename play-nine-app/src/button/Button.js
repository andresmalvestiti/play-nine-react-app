import React from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = (props) => {
    let button;
    switch(props.answerIsCorrect) {
        case true:
        button =
            <button
                type="button" 
                class="btn btn-success"
                onClick={props.acceptAnswer}>
               <FontAwesomeIcon icon="check" />
            </button>;
        break;
        case false:
        button =
            <button
                type="button" 
                class="btn btn-danger">
                <FontAwesomeIcon icon="times" />
            </button>;
        break;
        default:
        button =
            <button 
                onClick={props.checkAnswer}
                disabled={props.selectedNumbers.length === 0} 
                type="button" 
                class="btn btn-default">
                    =
            </button>;
        break;
    }
    return(
        <div className="ml-5 col-2">
            {button}
            <br />
            <br />
            <button class="btn btn-sm btn-warning"
                onClick={props.redraw}
                disabled={props.redraws === 0}>
                <FontAwesomeIcon icon="sync-alt" />
                {props.redraws}
            </button>
        </div>
    );
}

export default Button;
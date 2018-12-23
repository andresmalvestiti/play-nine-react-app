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
                class="btn btn-warning">
                    =
            </button>;
        break;
    }
    return(
        <div className="col-2">
            {button}
        </div>
    );
}

export default Button;
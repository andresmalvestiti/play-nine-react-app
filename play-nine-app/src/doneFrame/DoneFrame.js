import React from 'react';
import './DoneFrame.css';

const DoneFrame = (props) => {
    return(
        <div className="offset-5">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-default" onClick={props.resetGame}>
                Play Again
            </button>
        </div>
    );
}

export default DoneFrame;
import React from 'react';
import './DoneFrame.css';

const DoneFrame = (props) => {
    return(
        <div className="offset-5">
            <h2>{props.doneStatus}</h2>
        </div>
    );
}

export default DoneFrame;
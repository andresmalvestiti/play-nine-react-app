import React from 'react';
import './Button.css';


const Button = (props) => {
    return(
        <div className="col-2">
            <button disabled={props.selectedNumbers.length === 0} type="button" class="btn btn-warning">=</button>
        </div>
    );
}

export default Button;
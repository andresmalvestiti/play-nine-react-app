import React from 'react';
import './Button.css';
import 'bootstrap/dist/css/bootstrap.css';

const Button = (props) => {
    return(
        <div className="col-2">
            <button type="button" class="btn btn-warning">=</button>
        </div>
    );
}

export default Button;
import React from 'react';
import './Stars.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

const Stars = (props) => {
    // const numberOfStars = 1 + Math.floor(Math.random()*9);

    return(
        <div className="col-5">
           {_.range(props.numberOfStars).map(i => 
                <FontAwesomeIcon key={i} icon="star" className="star" />
            )}
        </div>
    );
}

export default Stars;
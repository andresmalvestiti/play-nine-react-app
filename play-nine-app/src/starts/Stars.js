import React from 'react';
import './Stars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

const Stars = (props) => {
    return(
        <div className="col-5">
           {_.range(props.numberOfStars).map(i => 
                <FontAwesomeIcon key={i} icon="star" className="star" />
            )}
        </div>
    );
}

export default Stars;
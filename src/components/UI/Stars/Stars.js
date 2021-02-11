import React from 'react';
import classes from './Stars.module.css';
import Star from './Star/Star';

const stars = props => {
    const starsOutput = [];

    for (let i = 0; i < parseFloat(props.amount); i++) {
        starsOutput.push(<Star key={i} />);
    }

    return (
        <div className={classes.StarsBlock}>
            {starsOutput}
        </div>
    )
}

export default stars;
import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Warm',
        iconName: 'sun'
    },
    winter: {
        text: 'Chilly',
        iconName: 'snowflake'
    },
};

const getSeason = (hem, month) => {
    console.log(hem)
    console.log(month)
    if (month > 2 && month < 9) {
        return hem === 'north' ? 'summer' : 'winter';
    } else {
        return hem === 'north' ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.hem, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
        <i className={`massive ${iconName} icon`} />
       <h1>{text}</h1></div>
    );
};

export default SeasonDisplay;
import React, { useContext, useState, useEffect} from 'react';
import DisplayedContext from '../context/displayedContext';

const RandomDisplay = () => {
    const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext);
    console.log(currentWorkouts);
    return(
    <div>{currentWorkouts.forEach((value) => {
        return console.log(value);
    })}</div>

    );
};


export default RandomDisplay;
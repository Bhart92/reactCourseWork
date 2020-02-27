import React, { useContext, useState, useEffect} from 'react';
import DisplayedContext from '../context/displayedContext';

const RandomWorkout = (props) => {
    const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext);
    const saveWorkout = () => {

      
    };
    return(
	<div>
		<div>
    <p>{props.name} | {props.url}</p>
    <button onClick={saveWorkout}>Save</button>
		</div>
	</div>


    );
};

export default RandomWorkout;
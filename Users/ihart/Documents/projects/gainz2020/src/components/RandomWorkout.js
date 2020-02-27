import React, { useContext, useState, useEffect} from 'react';
import DisplayedContext from '../context/displayedContext';

const RandomWorkout = (props) => {
    const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext);
    console.log(currentWorkouts);
    return(

	<div>
		<div>
    <p>{props.name} | {props.url}</p>
		</div>
	</div>


    );
};

export default RandomWorkout;
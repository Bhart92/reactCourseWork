import React, { useContext, useState, useEffect} from 'react';
import DisplayedContext from '../context/displayedContext';
import RandomWorkout from './RandomWorkout';
const RandomDisplay = (props) => {
    const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext);
    return(
	<div>
		<h1>Workouts</h1>
		{currentWorkouts.length === 0 && <p>Generate some workouts to get started.</p>}
		{
			currentWorkouts.map((workout, index) => (
				<RandomWorkout key={workout} 
						name={workout.name}
                        url={workout.url}/>
			))
		}
	</div>


    );
};


export default RandomDisplay;
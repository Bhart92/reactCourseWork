import React, { useContext, useState, useEffect} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import DisplayedContext from '../context/displayedContext';
import RandomWorkout from './RandomWorkout';
const RandomDisplay = (props) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
    const {currentWorkouts} = useContext(DisplayedContext);
    const onSave = () => {
        setSavedWorkouts(prevState => ({
            ...prevState,
          ...props
        }));
        console.log(savedWorkouts)
      }
    return(
	<div>
		<h1>Workouts</h1>
		{currentWorkouts.length === 0 && <p>Generate some workouts to get started.</p>}
		{
			currentWorkouts.map((workout, index) => (
				<RandomWorkout key={workout} 
						name={workout.name}
                        url={workout.url}
                        onSave={onSave}/>
			))
		}
	</div>


    );
};


export default RandomDisplay;
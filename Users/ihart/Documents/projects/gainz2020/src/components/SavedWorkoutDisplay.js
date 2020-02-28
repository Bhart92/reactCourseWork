import React, { useContext } from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedWorkout from './SavedWorkout';

const SavedWorkoutDisplay = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	return(
		<div>
            <SavedWorkout />
		</div>
	);
};

export default SavedWorkoutDisplay;
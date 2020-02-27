import React, { useContext, useState } from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';

const SavedWorkout = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	return(
		<div>
            <p>Saved SavedWorkouts</p>		
</div>
	);
};

export default SavedWorkout;
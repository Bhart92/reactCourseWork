import React, {useContext, useState} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedWorkout from './SavedWorkouts';
import Header from './Header';


const SavedWorkoutDisplay = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	console.log(savedWorkouts);
	return(
		<div>
	 <SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
            <SavedWorkout />
	</SavedWorkoutsContext.Provider>
		</div>
	);
};

export default SavedWorkoutDisplay;
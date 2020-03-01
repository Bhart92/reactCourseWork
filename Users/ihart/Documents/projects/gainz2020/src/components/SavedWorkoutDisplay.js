import React, {useContext, useState} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedWorkout from './SavedWorkout';


const SavedWorkoutDisplay = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);

	return(
		<div>
	 <SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
            <SavedWorkout />
	</SavedWorkoutsContext.Provider>
		</div>
	);
};

export default SavedWorkoutDisplay;
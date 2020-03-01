import React, {useContext} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';

const SavedWorkout = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	console.log(savedWorkouts);

	return(
		<div>
            <p>pp</p>		
</div>
	);
};

export default SavedWorkout;
import React, {useContext} from 'react';
import Header from '../components/Header';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';

const SavedWorkout = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	console.log(savedWorkouts);
	const workoutArray = Object.values(savedWorkouts);
	console.log(workoutArray);
	const handleReset = () => {
		setSavedWorkouts({});
	}

	return(
		<div>
			<Header />
			{workoutArray.length === 0 && <p>Save some workouts to get started.</p>}
            {workoutArray.map((workout) => {
				return <p>{workout}</p>;
			})}	
			<button onClick={handleReset}>Reset Workouts</button>
</div>
	);
};

export default SavedWorkout;
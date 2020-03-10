import React, {useContext, useEffect} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import Header from './Header';
import { createBrowserHistory } from 'history';

const SavedWorkout = (props) => {
	useEffect(() => {
	}, []);
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	let sessionWorkoutData = sessionStorage.getItem('workouts');
	let SessionWorkoutArray = [];
	sessionWorkoutData = JSON.parse(sessionWorkoutData);
	SessionWorkoutArray = Object.entries(sessionWorkoutData);
	const workoutArray = Object.entries(savedWorkouts);
	const handleReset = () => {
		sessionStorage.removeItem('workouts');
		setSavedWorkouts({});
	}
	return(
		<div>
			{SessionWorkoutArray.length === 0 && <p>Save some workouts to get started.</p>}
            {SessionWorkoutArray.map((workout) => {
				console.log(savedWorkouts)
				return <p key={workout[0]} className='workout'>{workout[1]}</p>;
			})}	
			<button onClick={handleReset}>Reset Workouts</button>
</div>
	);
};

export default SavedWorkout;
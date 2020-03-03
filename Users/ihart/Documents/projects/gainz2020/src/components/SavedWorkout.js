import React, {useContext} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import Header from './Header';
import { createBrowserHistory } from 'history';

const SavedWorkout = (props) => {
	const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
	const workoutArray = Object.entries(savedWorkouts);
	const handleReset = () => {
		sessionStorage.removeItem('workouts');
		setSavedWorkouts({});
	}
	const handleSetWorkouts = () => {
		let sessionWorkoutData = sessionStorage.getItem('workouts');
		sessionWorkoutData = JSON.parse(sessionWorkoutData);
		let SessionWorkoutArray = [];
		if(sessionWorkoutData){
			let SessionWorkoutArray = Object.values(sessionWorkoutData);
		}
	};
	return(
		<div>
				<Header />
			{handleSetWorkouts()}
			{workoutArray.length === 0 && <p>Save some workouts to get started.</p>}
            {workoutArray.map((workout) => {
				console.log(savedWorkouts)
				return <p key={workout[0]} className='workout'>{workout[1]}</p>;
			})}	
			<button onClick={handleReset}>Reset Workouts</button>
</div>
	);
};

export default SavedWorkout;
import React, {useContext} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import Header from './Header';

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
		const SessionWorkoutArray = Object.values(sessionWorkoutData);
		console.log(SessionWorkoutArray); 
	};
	return(
		<div>
				<Header />
			{workoutArray.length === 0 && <p></p>}
			{handleSetWorkouts()}
            {workoutArray.map((workout) => {
				console.log(savedWorkouts)
				return <p key={workout[0]} className='workout'>{workout[1]}</p>;
			})}	
			<button onClick={handleReset}>Reset Workouts</button>
</div>
	);
};

export default SavedWorkout;
import React, { useContext} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import DisplayedContext from '../context/displayedContext';
const RandomDisplay = (props) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
    const {currentWorkouts} = useContext(DisplayedContext);
    const savedData = [];
    const onSave = () => {
        setSavedWorkouts(prevState => ({
            ...prevState,
            ...savedData
                }))
    }
    console.log(savedWorkouts[0]);
    return(
	<div>
		<h1>Workouts</h1>
		{currentWorkouts.length === 0 && <p>Generate some workouts to get started.</p>}
		{
			currentWorkouts.map((workout, index) => (
                <div>
                <p>{workout.name} | {workout.url}</p>
                <button onClick={() => {
                    savedData.push(workout)
                    console.log(savedData);
                }}> Save</button>
                    </div>
			))
		}
        <button onClick={onSave}>Submit</button>
	</div>


    );
};


export default RandomDisplay;
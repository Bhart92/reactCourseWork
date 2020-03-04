import React, { useContext, useState} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import DisplayedContext from '../context/displayedContext';
import SaveButton from './SaveButton';


const RandomDisplay = (props) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
    const {currentWorkouts} = useContext(DisplayedContext);
    const [saved, setSaved] = useState('');
    let currentworkout = Object.values(currentWorkouts); 

    // console.log(currentworkout);
    const res = {};
        // console.log(res)
    let array = [];
    const handleSave = () => {
        array.forEach(obj => {
            res[obj.name] = obj.name;
            res[obj.name + '_url'] = obj.url;
            res[obj.name + '_value'] = obj.value;
        })
        const sessionData = JSON.stringify(res);
        sessionStorage.setItem('workouts', sessionData);
        setSavedWorkouts(prevState => ({
            ...prevState,
            ...res
        }))
        setSaved('Goto Saved Workouts to view list');
    }

    return(
	<div>
		<h1>Workouts</h1>
        {currentworkout.length === 0 && <p>Generate some workouts to get started.</p>}
		{
			currentworkout.map((workout, index) => {
                return (<div onClick={() => {
                    array.push(workout);
                }} key={workout.id}>
                <p >{workout.name}</p>
                <SaveButton />
                </div>)
        })
		}
    <div><button onClick={handleSave}>submit</button><span>{saved}</span></div>
	</div>


    )
};


export default RandomDisplay;
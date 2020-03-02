import React, { useContext} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import DisplayedContext from '../context/displayedContext';
const RandomDisplay = (props) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);
    const {currentWorkouts} = useContext(DisplayedContext);
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
    }
    return(
	<div>
		<h1>Workouts</h1>
		{
			currentworkout.map((workout, index) => {
                return (<div key={workout.id}>
                <p>{workout.name}</p>
                <div><button onClick={() => {
                    return array.push(workout);
                }}>Save</button>
                </div>

                </div>)
        })
		}
    <div><button onClick={handleSave}>submit</button></div>
	</div>


    )
};


export default RandomDisplay;
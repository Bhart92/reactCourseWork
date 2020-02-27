import React, { useContext, useState, useEffect} from 'react';
import DisplayedContext from '../context/displayedContext';
import WorkoutContext from '../context/workoutContext';
import workoutSelector from '../selectors/selector';

  const GenerateForm = (props) => {
    const workouts = useContext(WorkoutContext);
    const [state, setState] = useState({
        value: 'chest'
    });

    const {currentWorkouts, setCurrentWorkouts} = useContext(DisplayedContext)

    // useEffect(() => {
    //     setCurrentWorkouts([...currentWorkouts]);
    // })
    const inputValue = (e) => {
         const value = e.target.value; 
         setState(() => ({
             value
         }))

     };
     const onSubmit = (e) => {
        e.preventDefault();
        const workoutPackage = workoutSelector(state, workouts);
        let workoutArray = Object.keys(workoutPackage);
        workoutArray = Object.values(workoutPackage);
        setCurrentWorkouts([...workoutArray]);
    
// console.log(currentWorkouts)
            // this.props.handleSubmit();
     };
                return (
                    < WorkoutContext.Provider>
                        <div>
                        <form onSubmit={onSubmit}>              
                            <select value={state.value} onChange={inputValue}>
                                <option value='chest'>Chest</option>
                                <option value='back'>Back</option>
                                <option value='biceps'>Biceps</option>
                                <option value='triceps'>Triceps</option>
                                <option value='shoulders'>Shoulder</option>
                                <option value='legs'>Legs</option>
                                <option value='abs'>Abs</option>
                                <option value='cardio'>Cardio</option>
                            </select>
                            <div><button type='submit'>Generate</button></div>
                        </form>
                </div>
                    </WorkoutContext.Provider>
        );
};

        export default GenerateForm;
    

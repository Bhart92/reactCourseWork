import React, { useContext, useState} from 'react';
import DisplayedContext from '../context/displayedContext';
import WorkoutContext from '../context/workoutContext';
import workoutSelector from '../selectors/selector';

  const GenerateForm = (props) => {
    const workouts = useContext(WorkoutContext);
    const [state, setState] = useState({
        value: 'chest'
    });
    const {setCurrentWorkouts} = useContext(DisplayedContext)
    const inputValue = (e) => {
         const value = e.target.value; 
         setState(() => ({
             value
         }))
     };
     const resetForm = () => {
    //******* RESET FORM AND BUTTON STATE */
    setCurrentWorkouts([]);
     };
     const onSubmit = (e) => {
        e.preventDefault();
        const workoutArray = workoutSelector(state, workouts);
        // console.log(workoutArray)
        setCurrentWorkouts([...workoutArray]);
     };
                return (
                    < WorkoutContext.Provider>
                        <div className='generate-form'>
                        <form className='generate-form--form' onSubmit={onSubmit}>              
                            <select className='generate-form--select' value={state.value} onChange={inputValue}>
                                <option value='chest'>Chest</option>
                                <option value='back'>Back</option>
                                <option value='biceps'>Biceps</option>
                                <option value='triceps'>Triceps</option>
                                <option value='shoulders'>Shoulder</option>
                                <option value='legs'>Legs</option>
                                <option value='abs'>Abs</option>
                                <option value='cardio'>Cardio</option>
                            </select>
                            <div><button type='submit'>Generate</button>
                            </div>
                        </form>
                        <button onClick={resetForm}>Reset</button>
                </div>
                    </WorkoutContext.Provider>
        );
};

        export default GenerateForm;
    

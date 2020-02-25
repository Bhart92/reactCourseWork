import React, { useContext, useState} from 'react';
import WorkoutContext from '../context/workoutContext';
import workoutSelector from '../selectors/selector';

  const GenerateForm = () => {
    const workouts = useContext(WorkoutContext);
    const [state, setState] = useState({
        value: 'default'
    });

    const inputValue = (e) => {
         const value = e.target.value; 
         setState(() => ({
             value
         }))

     };
     const onSubmit = (e) => {
        e.preventDefault();
        const working = workoutSelector(state, workouts);

        
     };
                return (
                    < WorkoutContext.Provider>
                        <div>
                        <form onSubmit={onSubmit}>              
                            <select value={state.value} onChange={inputValue}>
                                <option value='default'> </option>
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
    

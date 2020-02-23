import React, { useContext} from 'react';
import WorkoutContext from '../context/workoutContext';

 const GenerateForm = () => {
                return (
                    < WorkoutContext.Provider>
                        <div>
                        <form>              
                            <select value={this.state.value}>
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
    

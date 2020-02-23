import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WorkoutContext from '../context/workoutContext';

const LandingPage = () => {
    const  workouts = useContext(WorkoutContext);
        return(
            < WorkoutContext.Provider>
            <div>
        {console.log(workouts.chest.workouts[0])}
            <h1>Gainz</h1>
            <span>Workout Randomizer</span>
            <Link to='/dashboard'><button>Get Started</button>
    </Link>
        </div>
        </WorkoutContext.Provider>
        );

};

export default LandingPage;
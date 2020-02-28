import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutContext from '../context/workoutContext';

const LandingPage = () => {

        return(
            < WorkoutContext.Provider>
            <div>
            <h1>Gainz</h1>
            <span>Workout Randomizer</span>
            <Link to='/dashboard'><button>Get Started</button>
    </Link>
        </div>
        </WorkoutContext.Provider>
        );

};

export default LandingPage;
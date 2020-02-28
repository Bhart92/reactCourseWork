import React, { useContext, useState, useEffect} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';


const RandomWorkout = (props) => {
    const {savedWorkouts, setSavedWorkouts} = useContext(SavedWorkoutsContext);

    return(
	<div>

	</div>
    );
};

export default RandomWorkout;
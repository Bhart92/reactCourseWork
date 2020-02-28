import React, {useState} from 'react';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import DisplayedContext from '../context/displayedContext';
import GenerateForm from './Form';
import RandomDisplay from './RandomDisplay';
import Header from '../components/Header';

const DashboardPage = (props) => {
    const [currentWorkouts, setCurrentWorkouts] = useState([]);
    const [savedWorkouts, setSavedWorkouts] = useState({});
    return(
        <div>
         <Header />
        <h1>Generate workouts</h1>
        <DisplayedContext.Provider value={ {currentWorkouts, setCurrentWorkouts}} >
        <GenerateForm />
        <SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
        <RandomDisplay />
        </ SavedWorkoutsContext.Provider>
	</ DisplayedContext.Provider >
    </div>
    )
    };



export default DashboardPage;
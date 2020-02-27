import React, {useContext, createContext, useState} from 'react';
import DisplayedContext from '../context/displayedContext';
import GenerateForm from './Form';
import RandomDisplay from './RandomDisplay';

const DashboardPage = (props) => {
    const [currentWorkouts, setCurrentWorkouts] = useState([]);
	// const handleSubmit = () => {
    // }
    return(
        <div>
        <h1>Generate workouts</h1>
        <DisplayedContext.Provider value={ {currentWorkouts, setCurrentWorkouts}} >
        <GenerateForm />
        <RandomDisplay />
	</ DisplayedContext.Provider >
    </div>
    )
    };



export default DashboardPage;
import React, {useContext, createContext, useState} from 'react';
import DisplayedContext from '../context/displayedContext';
import GenerateForm from './Form';
import RandomDisplay from './RandomDisplay';

const DashboardPage = (props) => {
    let [currentWorkouts, setCurrentWorkouts] = useState([]);
    console.log(currentWorkouts);
	// const handleSubmit = () => {
	// 	setCurrentWorkouts(() => {
		
	// });
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
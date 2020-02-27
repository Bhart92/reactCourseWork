import React, {useContext, createContext, useState} from 'react';
import DisplayedContext from '../context/displayedContext';
import GenerateForm from './Form';
import RandomDisplay from './RandomDisplay';
import Header from '../components/Header';

const DashboardPage = (props) => {
    const [currentWorkouts, setCurrentWorkouts] = useState([]);
    return(
        <div>
                                    <Header />
        <h1>Generate workouts</h1>
        <DisplayedContext.Provider value={ {currentWorkouts, setCurrentWorkouts}} >
        <GenerateForm />
        <RandomDisplay />
	</ DisplayedContext.Provider >
    </div>
    )
    };



export default DashboardPage;
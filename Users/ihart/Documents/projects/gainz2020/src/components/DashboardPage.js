import React, {useState} from 'react';
import GenerateForm from './Form';
import RandomDisplay from './RandomDisplay';
import Header from '../components/Header';

const DashboardPage = (props) => {
    return(
        <div>
         <Header />
        <h1>Generate workouts</h1>
        <GenerateForm />
        <RandomDisplay />
    </div>
    )
    };



export default DashboardPage;
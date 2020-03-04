import React, {useState} from 'react';
import GenerateForm from './Form';
import RandomDisplay from './RandomDisplay';
import Header from '../components/Header';

const DashboardPage = (props) => {
    return(
        <div className='container'>
         <Header />
         <section className='dashboard-container'>
         <h1>Generate workouts</h1>
            <GenerateForm />
            <RandomDisplay />
         </section>
    </div>
    )
    };



export default DashboardPage;
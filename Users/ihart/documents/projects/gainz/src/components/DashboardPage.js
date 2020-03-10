import React, {useContext} from 'react';
import Form from './Form';
import DisplayedContext from '../context/displayedContext';
import RandomDisplay from './RandomDisplay';
import Header from './Header';


const DashboardPage = (props) => {
    return(
        <div className='container'>
         <section className='dashboard-container'>
         <h1>Generate workouts</h1>
         <Form />
         <RandomDisplay />
         </section>
        </div>
        )
    };
    
export default DashboardPage;
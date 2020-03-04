import React, {useState} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';
import DashboardPage from '../components/DashboardPage';
import DisplayedContext from '../context/displayedContext';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedWorkoutDisplay from '../components/SavedWorkoutDisplay';

const AppRouter = () => {
    const [savedWorkouts, setSavedWorkouts] = useState({});
    const [currentWorkouts, setCurrentWorkouts] = useState({});

    return (
        <BrowserRouter>
        <div>
            <Route render={({location}) => (
                        <Switch location={location}>
                            <Route path='/' component={LandingPage} exact={true} />
                            <DisplayedContext.Provider value={ {currentWorkouts, setCurrentWorkouts}} >
                            <SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
                            <Route path='/dashboard' component={DashboardPage}/>
                            <Route path='/saved' component={SavedWorkoutDisplay}/>
                            </ SavedWorkoutsContext.Provider>
                            </ DisplayedContext.Provider >
                        </Switch>
            )} />
        </div>
        </BrowserRouter>
    )

            };

export default AppRouter;
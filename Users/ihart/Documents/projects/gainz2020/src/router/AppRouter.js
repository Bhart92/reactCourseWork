import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import Header from './components/Header';
import LandingPage from '../components/LandingPage';
import DashboardPage from '../components/DashboardPage';
import SavedWorkoutDisplay from '../components/SavedWorkoutDisplay';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Route render={({location}) => (
                    <Switch location={location}>
                        <Route path='/' component={LandingPage} exact={true} />
                        <Route path='/dashboard' component={DashboardPage}/>
                        <Route path='/saved' component={SavedWorkoutDisplay}/>
                    </Switch>
        )} />
    </div>
    </BrowserRouter>
);

export default AppRouter;
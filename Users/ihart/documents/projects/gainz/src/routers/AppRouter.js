import React, {useState} from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import DisplayedContext from '../context/displayedContext';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import SavedWorkoutsContext from '../context/savedWorkoutsContext';
import SavedWorkoutsDisplay from '../components/SavedWorkoutsDisplay';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => {
  const [savedWorkouts, setSavedWorkouts] = useState({});
  const [currentWorkouts, setCurrentWorkouts] = useState({});
  return(
    <Router history={history}>
    <div>
    <Switch>
       <PublicRoute exact={true} path="/" component={LoginPage}  />
                            <DisplayedContext.Provider value={ {currentWorkouts, setCurrentWorkouts}} >
                            <SavedWorkoutsContext.Provider value={{savedWorkouts, setSavedWorkouts}} >
                            <PrivateRoute exact path="/dashboard" component={DashboardPage}  />
                            <PrivateRoute exact path='/saved' component={SavedWorkoutsDisplay} />
                            </ SavedWorkoutsContext.Provider>
                            </ DisplayedContext.Provider >
                            <Route component={NotFoundPage} />
            </Switch>
    </div>
  </Router>
  );
};

export default AppRouter;

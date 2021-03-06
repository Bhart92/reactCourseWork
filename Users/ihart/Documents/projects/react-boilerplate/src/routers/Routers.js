import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';


const Routers = () => (
  <BrowserRouter>
  <div>
  <Header />
  <Switch>
  <Route path="/" component={ExpenseDashboardPage} exact={true}/>
  <Route path="/create" component={AddExpensePage}/>
  <Route path="/help" component={HelpPage}/>
  <Route component={ErrorPage}/>
  </Switch>
  </div>
  </BrowserRouter>
);

export default Routers;

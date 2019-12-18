import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import ErrorPage from '../components/ErrorPage';
import Dashboard from '../components/Dashboard';
import ItemOne from '../components/ItemOne';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


const Routers = () => (
  <BrowserRouter>
  <div>
  <Header />
  <Switch>
  <Route path="/" component={Dashboard} exact={true}/>
  <Route path="/portfolio" component={Portfolio} exact={true}/>
  <Route path="/portfolio/:id" component={ItemOne}/>
  <Route path="/contact" component={Contact}/>
  <Route component={ErrorPage}/>
  </Switch>
  </div>
  </BrowserRouter>
);

export default Routers;

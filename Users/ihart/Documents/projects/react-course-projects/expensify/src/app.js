import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers/Routers';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());


ReactDOM.render(<Routers />, document.getElementById('app'));

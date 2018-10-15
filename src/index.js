import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
//TODO REMOVE
//import CheeseList from './components/cheese-list';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';


//TODO REMOVE
const cheeses = [
  "Bath Blue",
  "Barkham Blue",
  "Buxton Blue"
];

//TODO REMOVE
ReactDOM.render(
  <Provider store={store}>
    <Router>
          <App />
    </Router>
  </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

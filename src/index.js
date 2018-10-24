import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import { Notifs } from 'redux-notifications';

import store from './store';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import './css/index.css';
import './css/notifications.css';

ReactDOM.render(
  <Provider store={store}>
    <section>
      <Router>
        <App />
      </Router>
      <Notifs />
    </section>
  </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

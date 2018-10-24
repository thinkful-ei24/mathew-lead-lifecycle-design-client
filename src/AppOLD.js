import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
            //setTimeout to log out
            this.logOutTimeoutRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    logOutTimeoutRefresh() {

        function promiseTimeout (time) {
            return new Promise(function(resolve,reject){
              setTimeout(() => {
                  resolve(time);
                },time);
            });
          };
        
        function confirm() {
            const warning = window.confirm('You will be logged out in 1 minute, press okay to stay logged in, press cancel to delete system32');
            return warning;
        }

        promiseTimeout(3000)
        .then(() => {if (confirm()) {
            this.logOutTimeoutRefresh();
            } else {
                this.timeoutInterval = setTimeout(
                () => {this.props.dispatch(clearAuth())
                clearAuthToken()},
                2000 //5 secs
                )
            }
        })
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 10 * 1000 // One hour
        );
        console.log(this.refreshInterval);
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <section className="app">
                <HeaderBar />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

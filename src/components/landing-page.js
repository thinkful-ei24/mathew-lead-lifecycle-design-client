import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <section className="home">
          <section className="loginBox drop-shadow">
              <h2>Welcome! Please Login.</h2>
              <LoginForm />
              <p>Don't have an account? <Link to="/register">Sign up here!</Link></p>
              {/* <p>Forgot your password?</p> */}
            </section>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../utils/local-storage';
import { IoMdPerson } from 'react-icons/io';
import { IconContext } from "react-icons";

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
              <IconContext.Provider value={{ size: '2em', className:"user-icon" }}>
                <section className='signOutArea'>
                  <IoMdPerson />
                  <Link to="/" onClick={() => this.logOut()}>Sign Out</Link>
                </section>
              </IconContext.Provider>
              
            );
        }
        return (
            <div className="header-bar">
                <h1>Lead Lifecycle Designer</h1>
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);

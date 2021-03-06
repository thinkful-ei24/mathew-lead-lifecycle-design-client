import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import { IoMdPerson } from 'react-icons/io';
// import { IoIosHelpCircleOutline } from 'react-icons/io';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../utils/local-storage';

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
                  {/* <IoIosHelpCircleOutline /> */}
                  <IoMdPerson />
                  <Link to="/" onClick={() => this.logOut()}>Sign Out</Link>
                </section>
              </IconContext.Provider>
              
            );
        }
        return (
            <header className="header-bar" role="banner">
                <h1>Lead Lifecycle Designer</h1>
                {logOutButton}
            </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);

import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function NavBar(props) {
    return (
        <div className="navBar">
            <Link to="/dashboard">Lead Dashboard</Link>
            <Link to="/lead">Create New Lead</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);

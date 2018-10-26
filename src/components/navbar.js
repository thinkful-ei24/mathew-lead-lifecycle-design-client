import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function NavBar(props) {
    return (
        <nav className="navBar" role="navigation">
            <Link to="/dashboard">Lead Dashboard</Link>
            <Link to="/lead">Create New Lead</Link>
        </nav>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);

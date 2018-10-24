import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function NavBar(props) {
    return (
        <section className="navBar">
            <Link to="/dashboard">Lead Dashboard</Link>
            <Link to="/lead">Create New Lead</Link>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);

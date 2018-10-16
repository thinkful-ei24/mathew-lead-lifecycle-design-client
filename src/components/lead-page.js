import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LeadForm from './lead-form';

export function LeadPage(props) {
    // If we are not logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
        <div className="dashboard">
          <section className="leadForm">  
            <h2>Lead Form</h2>
            <LeadForm />
            {/* <Link to="/">Login</Link> */}
          </section>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    leadBeingViewed: state.protectedData.leadBeingViewed
});

export default connect(mapStateToProps)(LeadPage);
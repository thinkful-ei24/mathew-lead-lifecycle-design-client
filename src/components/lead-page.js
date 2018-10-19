import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
//import NavBar from './navbar';

import LeadForm from './lead-form';

export function LeadPage(props) {
    // If we are not logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
      <div className="dashboard">
        <section className="container">
          <section className="workArea">
            <section className="leadForm">  
              <LeadForm />
            </section>
          </section>           
        </section>
      </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    leadBeingViewed: state.protectedData.leadBeingViewed
});

export default connect(mapStateToProps)(LeadPage);
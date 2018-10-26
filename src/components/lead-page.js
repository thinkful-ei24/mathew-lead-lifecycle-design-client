import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ReactModal from 'react-modal';

import {createLeadHelpModalOff} from '../actions/auth';
import LeadForm from './lead-form';

export function LeadPage(props) {
    // If we are not logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (!props.loggedIn) {
        return <Redirect to="/" />;
    }
    return (
      <section className="dashboard">
        <section className="container">
          <section className="workArea">
            <section className="leadForm">  
              
              <ReactModal ariaHideApp={false}
                isOpen={props.createLeadHelpModal}
                contentLabel="Modal"
                className="Modal"
                onRequestClose={() => props.dispatch(createLeadHelpModalOff())}
                shouldCloseOnOverlayClick={true}
              > 
                <h1>Hello! Welcome to the Lead Lifecycle Designer!</h1>
                <p>This webapp was built in order to track leads in such a way to automate the lead lifecycle reaching out process. Many service businesses struggle with contacting old leads consistently. A person generally needs to hear about or from a business 8-10 times before they decide to buy so it is extremely important to reach out to leads consistently.</p>
                <p>This webapp helps to alleviate that problem by automatically sending text messages and emails at appropriate times after the person has been added to the system. Note that this functionality is not part of the MVP and, as such, has not been completed.</p>
                <p>The <strong>First Name</strong>, <strong>Last Name</strong>, and the <strong>Mobile #</strong> are all required.</p>
                <p>The <strong>Next Upcoming Event</strong> comes from the Future Upcoming Event list.</p>
                <p>The <strong>Future Upcoming Event</strong> list is automatically generated. Eventually, the automatic emails and automatic texts will be sent from the server automatically. When a Follow Up Call is trigger, the app will pop up a message on that day so that the user will know to call.</p>
                <p>Right now, the Edit functions and Edit button doesn't work. I wanted to include them for styling purposes.</p>
                <button onClick={() => props.dispatch(createLeadHelpModalOff())}>Thanks!</button>
              </ReactModal>

              <LeadForm />
            </section>
          </section>           
        </section>
      </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    leadBeingViewed: state.leads.leadBeingViewed,
    createLeadHelpModal: state.auth.needsCreateLeadHelpModal
});

export default connect(mapStateToProps)(LeadPage);
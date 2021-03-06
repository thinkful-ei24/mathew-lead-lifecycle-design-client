import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {Field, reduxForm, focus, clearSubmitErrors} from 'redux-form';

import {createLead, resetLeadsState} from '../actions/leads';
import {LeadUpcomingEvent} from './lead-upcoming-event';
import { actions as notifActions } from 'redux-notifications';
import {LeadFutureUpcomingEvent} from './lead-future-upcoming-events';
import {required, nonEmpty, isTrimmed, phoneValidate} from '../utils/validators';

import '../css/index.css';
import '../css/leads.css';

const { notifSend } = notifActions;

const renderField = (field) => {
 return (<section className="input-row">
  <input {...field.input} type="text"/>
  {field.meta.touched && field.meta.error && 
    <span className="error">{field.meta.error}</span>}
  </section>)
}

export class CreateLead extends React.Component {
    onSubmit(values) {
      const scheduledEvents = this.props.upcomingEvents;
      const user = {...values, scheduledEvents}
      return this.props.dispatch(createLead(user));
    }

    componentWillUnmount() {
      if (this.props.leadsCreateLead) {
        this.props.dispatch(resetLeadsState())
        
        this.props.dispatch(notifSend({
          message: 'Your New Lead was Saved!',
          kind: 'info',
          dismissAfter: 3000
        })); 
    }
  }
    componentDidUpdate() {
      if (this.props.error) {
        this.errorGenerated();
        this.props.dispatch(clearSubmitErrors('createlead'));
      }
    }

    errorGenerated() {
      return this.props.dispatch(notifSend({
        message: this.props.error,
        kind: 'warning',
        dismissAfter: 3000
      }));
    }

    render() {
      if (this.props.leadsCreateLead) {
        return <Redirect to='/dashboard/' />;
      }

        return (
            <form
                className="createLead-form"
                onSubmit={this.props.handleSubmit(values => {
                  return this.onSubmit(values)
                }
                    
                )}>
                <section className="mainLeadForm">
                  <h2>Lead Form</h2>
                  {this.props.error && <strong>{this.props.error}</strong>}
                  <br />
                  <label htmlFor="firstName">First Name</label>
                  <Field 
                    component={renderField} 
                    type="text" 
                    name="firstName" 
                    validate={[required, nonEmpty, isTrimmed]}
                  />

                  <label htmlFor="lastName">Last Name</label>
                  <Field 
                    component={renderField} 
                    type="text" 
                    name="lastName" 
                    validate={[required, nonEmpty, isTrimmed]} 
                  />

                  <label htmlFor="mobilePhoneNumber">Mobile #</label>
                  <Field
                    component={renderField}
                    type="text"
                    name="mobilePhoneNumber"
                    validate={[required, nonEmpty, isTrimmed, phoneValidate]}
                  />

                  <label htmlFor="homeNumber">Home #</label>
                  <Field
                    component={renderField}
                    type="text"
                    name="homePhoneNumber"
                    validate={[nonEmpty, isTrimmed, phoneValidate]}
                  />
                  
                  <label htmlFor="emailAddress">Email Address</label>
                  <Field
                    component={renderField}
                    type="text"
                    name="emailAddress"
                    validate={[required, nonEmpty, isTrimmed]}
                  />

                  <label htmlFor="leadNotes" className='leadLabelFormNotes'>Notes</label>
                  <br />
                  <Field
                    component="textarea"
                    type="textarea"
                    name="leadNotes"
                    className='leadFieldFormNotes'
                    rows="3"
                    cols="25"
                  />
                </section>
                
            <LeadUpcomingEvent />
            <LeadFutureUpcomingEvent />
            <section className="buttons">
            <Link to="/dashboard" tabIndex="-1">
              <button tabIndex="0">
                Back to Dashboard
              </button>
            </Link>
              <button tabIndex='0'
                type="submit"
                disabled={this.props.pristine || this.props.submitting}>
                  Save Lead
              </button>
            </section>
                
            </form>
        );
    }}

function mapStateToProps(state) {
  return {
    leadsCreateLead: state.leads.createLead,
    upcomingEvents: state.leads.upcomingEvents
  }
}

CreateLead = connect( mapStateToProps)(CreateLead);
export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(CreateLead);

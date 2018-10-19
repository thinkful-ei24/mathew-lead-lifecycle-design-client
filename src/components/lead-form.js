import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createLead, resetLeadsState} from '../actions/leads';
import { clearSubmitErrors } from 'redux-form';
import '../css/index.css';
import '../css/leads.css';
import {LeadUpcomingEvent} from './lead-upcoming-event';
import { actions as notifActions } from 'redux-notifications';
import {LeadFutureUpcomingEvent} from './lead-future-upcoming-events';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

//import Input from './input';
import {required, nonEmpty, isTrimmed} from '../utils/validators';

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
      console.log(this.props)
      const scheduledEvents = this.props.upcomingEvents;
      console.log(this.props)
        // const user = {...values, upcomingEventsToSend};
        const user = {...values, scheduledEvents}
        console.log(user)
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
      // if (this.props.error) {
      //   this.errorGenerated();
      // }

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

                  <label htmlFor="mobilePhoneNumbergit ">Mobile #</label>
                  <Field
                    component={renderField}
                    type="text"
                    name="mobilePhoneNumber"
                    validate={[required, nonEmpty, isTrimmed]}
                  />

                  <label htmlFor="homeNumber">Home #</label>
                  <Field
                    component={renderField}
                    type="text"
                    name="homePhoneNumber"
                  />
                  
                  <label htmlFor="emailAddress">Email Address</label>
                  <Field
                    component={renderField}
                    type="text"
                    name="emailAddress"
                  />

                  <label htmlFor="leadNotes">Notes</label>
                  <Field
                    component="textarea"
                    type="textarea"
                    name="leadNotes"
                    rows="3"
                    cols="25"
                  />
                </section>
                
                
            <LeadUpcomingEvent />
            <LeadFutureUpcomingEvent />
            <section className="buttons">
            <Link to="/dashboard">
              <button>
                Back to Dashboard
              </button>
            </Link>
              <button
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
//TODO: Make Back to Dashboard button work
CreateLead = connect( mapStateToProps)(CreateLead);
export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(CreateLead);

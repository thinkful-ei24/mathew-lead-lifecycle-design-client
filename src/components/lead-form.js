import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createLead} from '../actions/leads';
import '../css/index.css';
import '../css/leads.css';
import {LeadUpcomingEvent} from './lead-upcoming-event';
import {LeadFutureUpcomingEvent} from './lead-future-upcoming-events';
import {Link, Redirect, push} from 'react-router-dom';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

//import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../utils/validators';
import { leadSelected } from '../actions/dashboard';

const renderField = (field) => {
 return (<div className="input-row">
  <input {...field.input} type="text"/>
  {field.meta.touched && field.meta.error && 
    <span className="error">{field.meta.error}</span>}
  </div>)
}

export class CreateLead extends React.Component {
    onSubmit(values) {
        const user = {...values};
        return this.props
            .dispatch(createLead(user))
            // .then((res) => {
            //   console.log(this.props.leadsCreateLead)
            //   if (this.props.leadsCreateLead === true){
            //     return <Link to='/dashboard' />
            //   }
    }

    render() {
      console.log(this.props.leadsCreateLead)
      if (this.props.leadsCreateLead) {
        
        // return browserHistory.push('/dashboard/')
        return;
      } else {
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
}

function mapStateToProps(state) {
  return {
    leadsCreateLead: state.leads.createLead
  }
}
//TODO: Make Back to Dashboard button work
CreateLead = connect( mapStateToProps)(CreateLead);
export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(CreateLead);

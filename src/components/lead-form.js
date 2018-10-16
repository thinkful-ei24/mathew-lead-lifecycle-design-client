import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createLead} from '../actions/leads';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../utils/validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class CreateLead extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(createLead(user))
            // .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="createLead-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First Name</label>
                <Field 
                  component={Input} 
                  type="text" 
                  name="firstName" 
                  validate={[required, nonEmpty, isTrimmed]}
                />

                <label htmlFor="lastName">Last Name</label>
                <Field 
                  component={Input} 
                  type="text" 
                  name="lastName" 
                  validate={[required, nonEmpty, isTrimmed]} 
                />

                <label htmlFor="mobileNumber">Mobile #</label>
                <Field
                  component={Input}
                  type="text"
                  name="mobileNumber"
                  validate={[required, nonEmpty, isTrimmed]}
                />

                <label htmlFor="homeNumber">Home #</label>
                <Field
                  component={Input}
                  type="text"
                  name="homeNumber"
                />
                
                <label htmlFor="emailAddress">Email Address</label>
                <Field
                  component={Input}
                  type="text"
                  name="emailAddress"
                />

                <label htmlFor="leadNotes">Notes</label>
                <Field
                  component='textarea'
                  type="textarea"
                  name="leadNotes"
                  rows="3"
                  cols="25"
                />
<br />
                <button
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
                    Save Lead
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(CreateLead);

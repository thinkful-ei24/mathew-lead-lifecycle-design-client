import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {createLead} from '../actions/leads';
//import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../utils/validators';

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
            // .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="createLead-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
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

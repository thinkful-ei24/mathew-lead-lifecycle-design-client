import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../utils/validators';
import '../css/index.css';
import '../css/leads.css';

export class LeadFutureUpcomingEvent extends React.Component {
    // onSubmit(values) {
    //     const user = {...values};
    //     return this.props
    //         .dispatch(createLead(user))
    //         // .then(() => this.props.dispatch(login(username, password)));
    // }

    //Below is just basic placeholder text.
    //TODO Make dynamic so it gets the data from the server
    render() {
        return (
            <section className="lead-container-future">
              <p><strong>Future Upcoming Events:</strong></p>
              <section className="leadFutureUpcomingEvent drop-shadow">
                <p><strong>Due Date</strong></p>
                <p><strong>Event Type</strong></p>
                <p><strong>Notes</strong></p>
                <p><strong>Action</strong></p>

                <p>10/12/18</p>
                <p>Automated Email</p>
                <p>none</p>
                <p>Edit / Delete</p>

                <p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p><p>10/15/18</p>
                <p>Automated Call</p>
                <p>none</p>
                <p>Edit / Delete</p>

                <p>10/18/18</p>
                <p>Automated Text</p>
                <p>none</p>
                <p>Edit / Delete</p>
              </section>
              
            </section>
                
        );
    }
}

export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(LeadFutureUpcomingEvent);

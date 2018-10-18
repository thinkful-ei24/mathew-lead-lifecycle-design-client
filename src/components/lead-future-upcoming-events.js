import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import moment from 'moment';
import {required, nonEmpty, matches, length, isTrimmed} from '../utils/validators';
import UpcomingEventsCreator from './automated-scheduled-events';
import '../css/index.css';
import '../css/leads.css';

export class LeadFutureUpcomingEvent extends React.Component {
    // onSubmit(values) {
    //     const user = {...values};
    //     return this.props
    //         .dispatch(createLead(user))
    //         // .then(() => this.props.dispatch(login(username, password)));
    // }
    
    // TODO: How do I pass these objects from the UpcomingEventsCreator to the Lead Form? 
    // Do all of this in the leads.js actions and reducers
    // IDEA: Create an action to update the leads store with the upcoming events array.
    // Then When Save Lead is called, it gets the Leads Upcoming Events array. Then it adds it to the send object and sends it on its way.
    render() {
        return (
            <section className="lead-container-future">
              <p><strong>Future Upcoming Events:</strong></p>
              <UpcomingEventsCreator />
            </section>
        );
    }
}

export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(LeadFutureUpcomingEvent);

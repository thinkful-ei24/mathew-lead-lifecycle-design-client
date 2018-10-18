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
    
    render() {
        return (
            <section className="lead-container-future">
              <p><strong>Future Upcoming Events:</strong></p>
              <UpcomingEventsCreator />
              {/* <section className="leadFutureUpcomingEvent drop-shadow">
                <p><strong>Due Date</strong></p>
                <p><strong>Event Type</strong></p>
                <p><strong>Notes</strong></p>
                <p><strong>Action</strong></p>

                

              </section> */}
            </section>
                
        );
    }
}

export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(LeadFutureUpcomingEvent);

import React from 'react';
import {reduxForm, focus} from 'redux-form';

import UpcomingEventsCreator from './automated-scheduled-events';

import '../css/index.css';
import '../css/leads.css';

export class LeadFutureUpcomingEvent extends React.Component {
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

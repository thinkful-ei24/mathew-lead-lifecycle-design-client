import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../utils/validators';
import '../css/index.css';
import '../css/leads.css';

export class LeadUpcomingEvent extends React.Component {
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
            <section className="lead-container">
              <p><strong>Next Upcoming Event:</strong></p>
              <section className="leadNextUpcomingEvent drop-shadow">
                <p><strong>Type: Automated Email</strong></p>
                <p><strong>Due Date: </strong>10/15/18</p>
                <p><strong>Notes:</strong><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris, dictum porttitor lacus est nec enim. Vivamus feugiat elit lorem, eu porttitor ante ultrices id. Phasellus suscipit tellus ante, nec dignissim elit imperdiet nec. Nullam fringilla feugiat nisl. Ut pretium, metus venenatis dictum viverra, dui metus finibus enim, ac rhoncus sem lorem vitae mauris. 
                </p>

                <button
                  type="submit"
                  disabled={this.props.pristine || this.props.submitting}>
                    Edit
                </button>
              </section>
              
            </section>
                
        );
    }
}

export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(LeadUpcomingEvent);

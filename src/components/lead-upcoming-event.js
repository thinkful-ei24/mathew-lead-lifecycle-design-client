import React from 'react';
import {reduxForm, focus} from 'redux-form';
import { connect } from 'react-redux';

import '../css/index.css';
import '../css/leads.css';

export class LeadUpcomingEvent extends React.Component {
    render() {
      if (!this.props.upcomingEvents) {
        return null;
      }
        return (
          
            <section className="lead-container">
              <p><strong>Next Upcoming Event:</strong></p>
              <section className="leadNextUpcomingEvent drop-shadow">
                <p><strong>Type: {this.props.upcomingEvents[0].eventType}</strong></p>
                <p><strong>Due Date: </strong>{this.props.upcomingEvents[0].dateAndTime.format("MM/DD/YY")}</p>
                <p><strong>Notes:</strong><br />
                  {this.props.upcomingEvents[0].notes}
                </p>

                <button
                  type="button"
                  disabled={true} >
                  {/* disabled={this.props.pristine || this.props.submitting}> */}
                    Edit
                </button>
              </section>
              
            </section>
                
        );
    }
}

const mapStateToProps = state => {
  return {
      upcomingEvents: state.leads.upcomingEvents
  };
};

LeadUpcomingEvent = connect( mapStateToProps)(LeadUpcomingEvent);
export default reduxForm({
    form: 'createlead',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createlead', Object.keys(errors)[0]))
})(LeadUpcomingEvent);

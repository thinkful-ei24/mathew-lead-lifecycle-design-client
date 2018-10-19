import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {stateUpdateUpcomingEvents} from '../actions/leads';
import requiresLogin from './requires-login';

const schedule = {
  1: [2, 'Follow Up Call'],
  2: [2, 'Follow Up Text'],
  3: [2, 'Follow Up Email'],
  4: [4, 'Follow Up Call'],
  5: [4, 'Follow Up Text'],
  6: [4, 'Follow Up Email'],
  7: [7, 'Follow Up Call'],
  8: [7, 'Follow Up Text'],
  9: [7, 'Follow Up Email'],
}



export class UpcomingEventsCreator extends React.Component {
  //Date Array Creator
  //Get today's date
  //Add two days for follow up Call
  //Add two days to that for follow up text
  //Add two days for follow up email
  //Add four days for follow up Call
  //Add four days to that for follow up text
  //Add four days for follow up email
  //Add seven days for follow up Call
  //Add seven days to that for follow up text
  //Add seven days for follow up email

  constructor(props) {
    super(props);
    this.generateDateArray();
    // this.props.dispatch(stateUpdateUpcomingEvents(newDateArray));
  }
  
  generateDateArray = () => {
    console.log('This is running')
    let dateArray = [];
    let newDate = moment();
    Object.keys(schedule).forEach(item => {
      newDate = newDate.clone().add(schedule[item][0], 'days');
      dateArray.push([newDate, schedule[item][1], 'Automatically generated']);
    });
    console.log('Date Array is ', dateArray)
    this.props.dispatch(stateUpdateUpcomingEvents(dateArray));
    console.log('Props.leads.upcomingEvents is ', this.props.leads.upcomingEvents)
    // return dateArray;
  }

render() {
  console.log('Line 55', this.props.leads.upcomingEvents)
  const eventCells = this.props.leads.upcomingEvents.map(event => {
    return (
      /*
        A note on React.Fragment:
        Normally, JSX elements should either consist of a single element,
        or multiple elements wrapped in a single element at the top level.
        Since we're returning siblings, and we don't want to wrap these divs
        in another div (that would break the grid), we use React.Fragment.

        See the docs for more on fragments:
        https://reactjs.org/docs/fragments.html
      */
      <React.Fragment key={event[0] + event[1]}>
        <div className='date' >
          {event[0].format("MM/DD/YY")}
        </div>
        <div className='eventType' >
          {event[1]}
        </div>
        <div className='notes' >
          {event[2]}
        </div>
        <div className='action' >
          Edit / Delete
        </div>
      </React.Fragment>
  )});
  let headerCells = (
      <React.Fragment>
        <div className="date"><strong>Due Date</strong></div>
        <div className="eventType"><strong>Event Type</strong></div>
        <div className="notes"><strong>Notes</strong></div>
        <div className="action"><strong>Action</strong></div>
      </React.Fragment>
    );
  return (
      <div className="leadFutureUpcomingEvent drop-shadow">
        {headerCells}
        {eventCells}
      </div>
  );    
}
}

const mapStateToProps = state => {
  //const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      leads: state.leads,
      upcomingEvents: state.leads.upcomingEvents
  };
};
export default requiresLogin()(connect(mapStateToProps)(UpcomingEventsCreator));
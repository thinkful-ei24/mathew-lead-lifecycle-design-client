import React from 'react';
import moment from 'moment';


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

//Upcoming Events Array Creator (An Array of Date Objects => An Array of this format:
// let eventObjTwo = {
//   eventType: 'Automated Text',
//   dateAndTime: moment("2018-10-28T17:36:02.226Z"),
//   notes: "Text this person"
// })
const dateArray = [];
  let newDate = moment();

export default class UpcomingEventsCreator extends React.Component {
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
  
  generateDateArray() {
    Object.keys(schedule).forEach(item => {
      newDate = newDate.clone().add(schedule[item][0], 'days');
      dateArray.push([newDate, schedule[item][1], 'Automatically generated']);
    });
  
    return dateArray;
  }

  
//   render() {
//     console.log(dateArray.map(event => {
//       return (
//         <section>
//         <p>{event[0].format("MM/DD/YY")}</p>
//         <p>{event[1]}</p>
//         <p>{event[2]}</p>
//         <p>Edit / Delete</p>
//         </section>
//       )
//     }))
//     return ( dateArray.map(event => {
//       return (
//         <section>
//         <p>{event[0].format("MM/DD/YY")}</p>
//         <p>{event[1]}</p>
//         <p>{event[2]}</p>
//         <p>Edit / Delete</p>
//         </section>
//       )
//     }))
//   }
// }

render() {
  const dateArray = this.generateDateArray();
  const eventCells = dateArray.map(event => {
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
      <React.Fragment key={event.id}>
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
        <div className="date">Due Date</div>
        <div className="eventType">Event Type</div>
        <div className="notes">Notes <br />Date</div>
        <div className="action">Action</div>
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

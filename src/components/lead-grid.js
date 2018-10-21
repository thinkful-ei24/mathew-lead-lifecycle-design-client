import React from "react";
import { connect } from "react-redux";
import Media from 'react-media';

import { fetchAllLeads } from "../actions/dashboard";
import '../css/index.css';
import '../css/dashboard-grid.css';
import '../css/responsiveTableStyle.css'
const moment = require('moment');



class LeadGrid extends React.Component {

  //Goal of this is to click on a row, then it opens a lead viewer
  leadClicked(id) {
    this.props.dispatch(fetchAllLeads(id));
  }
  
  render() {
    
    const leadCells = this.props.leads.map((x, i) => {

      /*
        We use `selected` below to determine whether or not the current set of
        cells corresponds to the currently selected person, and if so, add the 
        appropriate class so that we get the gray highlights on the whole row. 
      */
      let selected = this.props.leadSelected === i ? 'selected' : '';
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
       
        <React.Fragment key={x.firstName + x.lastName}>
          {/* <div className="overall-container"> */}
           <div className={`cell firstName ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.firstName}
              </div>
              <div className={`cell lastName ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.lastName}
              </div>
              <div className={`cell lastContactedDate ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {moment(x.updatedAt).format('MM-DD-YYYY')}
              </div>
              <div className={`cell mobilePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.mobilePhoneNumber}
              </div>
              <div className={`cell homePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.homePhoneNumber}
              </div>
              <div className={`cell emailAddress ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.emailAddress}
              </div>
              <div className={`cell lastCell nextScheduledEvent ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.nextScheduledEvent}
              </div>
         

        </React.Fragment>
    )});
    let headerCells = (
        <React.Fragment>
          <div className="cell header firstName">First Name</div>
            <div className="cell header lastName">Last Name</div>
            <div className="cell header lastContactedDate">Last Contacted <br />Date</div>
            <div className="cell header mobilePhoneNumber">Mobile #</div>
            <div className="cell header homePhoneNumber">Home #</div>
            <div className="cell header email">Email Address</div>
            <div className="cell header lastCell nextScheduledEvent">Next Scheduled Event</div>
        </React.Fragment>
      );
      
      ///////////////////////////////////////////////////////
      const leadCellsSmall = this.props.leads.map((x, i) => {

        /*
          We use `selected` below to determine whether or not the current set of
          cells corresponds to the currently selected person, and if so, add the 
          appropriate class so that we get the gray highlights on the whole row. 
        */
        let selected = this.props.leadSelected === i ? 'selected' : '';
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
         
          <React.Fragment key={x.firstName + x.lastName}>
            {/* <div className="overall-container"> */}
              <div className="container-left"> 
                <div className="cell header firstName">First Name</div>
                <div className="cell header lastName">Last Name</div>
                <div className="cell header lastContactedDate">Last Contacted Date</div>
                <div className="cell header mobilePhoneNumber">Mobile #</div>
                <div className="cell header homePhoneNumber">Home #</div>
                <div className="cell header email">Email Address</div>
                <div className="cell header lastCell nextScheduledEvent">Next Scheduled Event</div>
              </div>
  
              <div className="container-right">
                <div className={`cell firstName ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {x.firstName}
                </div>
                <div className={`cell lastName ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {x.lastName}
                </div>
                <div className={`cell lastContactedDate ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {moment(x.updatedAt).format('MM-DD-YYYY')}
                </div>
                <div className={`cell mobilePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {x.mobilePhoneNumber}
                </div>
                <div className={`cell homePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {x.homePhoneNumber}
                </div>
                <div className={`cell emailAddress ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {x.emailAddress}
                </div>
                <div className={`cell lastCell nextScheduledEvent ${selected}`} onClick={e => this.leadClicked(x.id)}>
                  {x.nextScheduledEvent}
                </div>
              </div>
            {/* </div> */}
  
          </React.Fragment>
      )});
      let headerCellsSmall = (
          <React.Fragment>
            <div className="cell header firstName">First Name</div>
              <div className="cell header lastName">Last Name</div>
              <div className="cell header lastContactedDate">Last Contacted <br />Date</div>
              <div className="cell header mobilePhoneNumber">Mobile #</div>
              <div className="cell header homePhoneNumber">Home #</div>
              <div className="cell header email">Email Address</div>
              <div className="cell header lastCell nextScheduledEvent">Next Scheduled Event</div>
          </React.Fragment>
        );
    
    return (
        //Plan: Use https://www.npmjs.com/package/react-media
        //If lower than 700px, render a pivoted table
        //If higher than 700px, render a normal table
        //That way, you're not creating a whole bunch of components 
        //  you don't need!
       <Media query="(max-width: 700px)">
          {matches =>
            matches ? (
              <div className="overall-container">
                {leadCellsSmall}
              </div>
            ) : (
              <div className="overall-container">
                {headerCells}
                {leadCells}
              </div>
            )
          }
        </Media>
    );    
  }
}

function mapStateToProps(state) {
  return {
    leads: state.dashboard.data,
    leadSelected: state.dashboard.personSelected
  }
};

export default connect(mapStateToProps)(LeadGrid);
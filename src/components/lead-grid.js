import React from "react";
import { connect } from "react-redux";
import Media from 'react-media';

import { fetchAllLeads } from "../actions/dashboard";

import '../css/index.css';
import '../css/dashboard-grid.css';
import '../css/responsiveTableStyle.css';

const moment = require('moment');



export class LeadGrid extends React.Component {
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
        <React.Fragment key={x.firstName + x.lastName + x.updatedAt}>
          <section className={`cell firstName ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {x.firstName}
          </section>
          <section className={`cell lastName ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {x.lastName}
          </section>
          <section className={`cell lastContactedDate ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {moment(x.updatedAt).format('MM-DD-YYYY')}
          </section>
          <section className={`cell mobilePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {x.mobilePhoneNumber}
          </section>
          <section className={`cell homePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {x.homePhoneNumber}
          </section>
          <section className={`cell emailAddress ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {x.emailAddress}
          </section>
          <section className={`cell lastCell nextScheduledEvent ${selected}`} onClick={e => this.leadClicked(x.id)}>
            {x.nextScheduledEvent}
          </section>
        </React.Fragment>
    )});
    let headerCells = (
        <React.Fragment>
          <section className="cell header firstName">First Name</section>
          <section className="cell header lastName">Last Name</section>
          <section className="cell header lastContactedDate">Last Contacted <br />Date</section>
          <section className="cell header mobilePhoneNumber">Mobile #</section>
          <section className="cell header homePhoneNumber">Home #</section>
          <section className="cell header email">Email Address</section>
          <section className="cell header lastCell nextScheduledEvent">Next Scheduled Event</section>
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
         
          <React.Fragment key={x.firstName + x.lastName + x.updatedAt}>
            <section className="container-left"> 
              <section className="cell header firstName">First Name</section>
              <section className="cell header lastName">Last Name</section>
              <section className="cell header lastContactedDate">Last Contacted Date</section>
              <section className="cell header mobilePhoneNumber">Mobile #</section>
              <section className="cell header homePhoneNumber">Home #</section>
              <section className="cell header email">Email Address</section>
              <section className="cell header lastCell nextScheduledEvent">Next Scheduled Event</section>
            </section>
  
            <section className="container-right">
              <section className={`cell firstName ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.firstName}
              </section>
              <section className={`cell lastName ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.lastName}
              </section>
              <section className={`cell lastContactedDate ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {moment(x.updatedAt).format('MM-DD-YYYY')}
              </section>
              <section className={`cell mobilePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.mobilePhoneNumber}
              </section>
              <section className={`cell homePhoneNumber ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.homePhoneNumber}
              </section>
              <section className={`cell emailAddress ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.emailAddress}
              </section>
              <section className={`cell lastCell nextScheduledEvent ${selected}`} onClick={e => this.leadClicked(x.id)}>
                {x.nextScheduledEvent}
              </section>
            </section>
          </React.Fragment>
      )});
    
    return (
        //Plan: Use https://www.npmjs.com/package/react-media
        //If lower than 700px, render a pivoted table
        //If higher than 700px, render a normal table
        //That way, you're not creating a whole bunch of components 
        //  you don't need!
       <Media query="(max-width: 700px)">
          {matches =>
            matches ? (
              <section className="overall-container">
                {leadCellsSmall}
              </section>
            ) : (
              <section className="overall-container">
                {headerCells}
                {leadCells}
              </section>
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
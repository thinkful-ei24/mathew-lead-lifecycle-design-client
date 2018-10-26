import React from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';

import requiresLogin from './requires-login';
import {fetchAllLeads} from '../actions/dashboard';
import {dashboardHelpModalOff} from '../actions/auth';
import LeadGrid from './lead-grid'

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllLeads());
    }

    render() {
      if (!this.props.dashboard.data) {
        return (
          <section className="dashboard">
            <section className="flexcontainer">
            <LeadGrid />
              <ReactModal ariaHideApp={false}
                isOpen={this.props.dashboardHelpModal}
                contentLabel="Modal"
                className="Modal"
                onRequestClose={() => this.props.dispatch(dashboardHelpModalOff())}
                shouldCloseOnOverlayClick={true}
              >
                <h1>Hello! Welcome to the Lead Lifecycle Designer!</h1>
                <p>This webapp was built in order to track leads in such a way to automate the lead lifecycle reaching out process. Many service businesses struggle with contacting old leads consistently. A person generally needs to hear about or from a business 8-10 times before they decide to buy so it is extremely important to reach out to leads consistently.</p>
                <p>The <strong>Lead Dashboard</strong> link will bring you to this page.</p>
                <p>The <strong>Create New Lead</strong> link will bring you to the Create Lead page.</p>
                <button type='submit' onClick={() => this.props.dispatch(dashboardHelpModalOff())}>Thanks!</button>
              </ReactModal>
            </section>
          </section>
      )
      } else {
        return (
          <section>
            Loading data...{!this.props.dashboard.data}
          </section>
        )
      }
        
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        dashboard: state.dashboard.data,
        dashboardHelpModal: state.auth.needsDashboardHelpModal
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

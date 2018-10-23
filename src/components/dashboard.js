import React from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';

import requiresLogin from './requires-login';
import {fetchAllLeads} from '../actions/dashboard';
import {dashboardHelpModalOff} from '../actions/auth';
import LeadGrid from './lead-grid'

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllLeads());
    }

    render() {
      if (!this.props.dashboard.data) {
        return (
          <div className="dashboard">
            <div className="flexcontainer">
            <LeadGrid />
              <ReactModal ariaHideApp={false}
                isOpen={this.props.dashboardHelpModal}
                contentLabel="Modal"
                className="Modal"
                onRequestClose={() => this.props.dispatch(dashboardHelpModalOff())}
                shouldCloseOnOverlayClick={true}
              >
                <h1>Hello! Welcome to the Lead Lifecycle Designer!</h1>
                <p>The <strong>Lead Dashboard</strong> link will bring you to this page.</p>
                <p>The <strong>Create New Lead</strong> link will bring you to the Create Lead page.</p>
                <button onClick={() => this.props.dispatch(dashboardHelpModalOff())}>Thanks!</button>
              </ReactModal>
            </div>
          </div>
      )
      } else {
        return (
          <div>
            Loading data...
          </div>
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

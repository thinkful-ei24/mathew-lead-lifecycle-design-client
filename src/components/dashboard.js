import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchAllLeads} from '../actions/dashboard';
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
            {/* <ViewEditPerson /> */}
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
        dashboard: state.dashboard.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

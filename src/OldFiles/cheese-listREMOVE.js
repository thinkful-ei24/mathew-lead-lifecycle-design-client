//TODO: REMOVE THIS
import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
// import { fetchCheeses } from '../actions/cheese';



export class CheeseList extends React.Component {
  componentDidMount(prevProps) {
    // this.props.dispatch(fetchCheeses());
  }

  render() {
    //const cheeseMap = this.props.cheeses.map( (cheese, i) => <li key={i}>{cheese}</li>)
    const cheeseMap = ['thing']
    return (
      <ul>
        {cheeseMap}
      </ul>
    )
    }
  
}

const mapStateToProps = state => ({
  cheeses: state.cheese.cheeses,
  loading: state.cheese.loading,
  error: state.cheese.error
});

export default withRouter(connect(mapStateToProps)(CheeseList));

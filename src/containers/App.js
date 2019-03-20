import React, { Component} from 'react';
import { connect } from 'react-redux';

import '../styles/app.styl';

import BillsList from '../components/BillsList';

import AddBill from '../containers/AddBill';

class App extends Component {
  render() {
    const bills = this.props.bills;
    return(
      <div className="wrapper">
        <BillsList bills={bills} headers={this.props.headers} categories={this.props.categories}/>
        <AddBill/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bills: state.bills,
    headers: state.headers,
    categories: state.categories
  }
}

export default connect(mapStateToProps)(App);
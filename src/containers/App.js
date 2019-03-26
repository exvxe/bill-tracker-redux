import React, { Component} from 'react';
import { connect } from 'react-redux';

import '../styles/app.styl';

import BillsList from '../components/BillsList';
import AddBill from '../containers/AddBill';

import { deleteBill } from '../actions/billActions'

class App extends Component {
  deleteHandler = (id) => {
    this.props.deleteBill(id)
  }
  render() {
    return(
      <div className="wrapper">
        <BillsList bills={this.props.bills} headers={this.props.headers} categories={this.props.categories} deleteHandler={this.deleteHandler}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBill: (id) => { dispatch(deleteBill(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
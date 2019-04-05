import React, { Component} from 'react';
import { connect } from 'react-redux';

import '../styles/app.styl';

import BillsList from '../components/BillsList';

import AddBill from '../containers/AddBill';
import Categories from '../containers/Categories';
import BarChart from '../containers/BarChart';

import { deleteBill } from '../actions/billActions'

class App extends Component {
  handleDelete = (id) => {
    this.props.deleteBill(id)
  }
  render() {
    return(
      <div className="wrapper">
        <BillsList bills={this.props.bills} headers={this.props.headers} categories={this.props.categories} handleDelete={this.handleDelete}/>
        <AddBill/>
        <div className="barCharts">
          <BarChart bills={this.props.bills} categories={this.props.categories} month={new Date().getMonth()} accent="#CD9900" title="Last month" width="400" height="300"/>
          <BarChart bills={this.props.bills} categories={this.props.categories} month={new Date().getMonth() + 1} accent="#260094" title="This month" width="400" height="300"/>
        </div>
        <Categories/>
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


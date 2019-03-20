import React, { Component} from 'react';
import { connect } from 'react-redux';

import '../styles/addBill.styl';

import CategoriesList from '../components/CategoriesList';

class AddBill extends Component {
    handleChange = (e) => {
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="addNote">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="value">Value:</label>
                    <input type="text" id="value" onChange={this.handleChange}/>
                    <label htmlFor="category">Category:</label>
                    <CategoriesList categories={this.props.categories}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps)(AddBill);
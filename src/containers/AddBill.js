import React, { Component} from 'react';
import { connect } from 'react-redux';

import '../styles/addBill.styl';

import CategoriesList from '../components/CategoriesList';

import { addBill } from '../actions/billActions'

class AddBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            amount: '',
            category: '0',
            addded: ''
        };
    }
    handleChange = (e) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        this.setState({
            [name]: value,
            added: new Date().toLocaleDateString()
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let {title, amount, category, added} = this.state
        let id = this.props.lastID + 1
        this.props.addBill(id, title, amount, category, added)
    }
    render() {
        return (
            <div className="addBill">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                    <label htmlFor="amount">Value:</label>
                    <input type="number" step="0.01" id="amount" onChange={this.handleChange}/>
                    <label htmlFor="category">Category:</label>
                    <CategoriesList categories={this.props.categories} changeHandler={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        lastID: state.lastID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBill: (id, title, amount, category, added) => { dispatch(addBill(id, title, amount, category, added))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBill);
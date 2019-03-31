import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../styles/categories.styl';

import CategoriesList from '../components/CategoriesList';

import { addCategory, deleteCategory } from '../actions/categoriesActions'


class Categories extends Component {
    handleChange = (e) => {
        const target = event.target;
        const value = target.value;
        const name = target.id;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.catLastID + 1
        this.props.addCategory(id, this.state.newCategory)
    }
    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteCategory(this.state.category)
    }
    render() {
        return (
            <div className="categories-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newCategory">New Category:</label>
                    <input type="text" id="newCategory" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <form onSubmit={this.handleDelete}>
                    <label htmlFor="category">Delete Category:</label>
                    <CategoriesList categories={this.props.categories} changeHandler={this.handleChange}/>
                    <button>Delete</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        catLastID: state.catLastID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (id, category) =>  dispatch(addCategory(id, category)),
        deleteCategory: (id) => dispatch(deleteCategory(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
import React, { Component} from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../actions/categoriesActions'

class Categories extends Component {
    handleChange = (e) => {
        const target = event.target;
        const value = target.value;
        this.setState({
            category: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.catLastID + 1
        this.props.addCategory(id, this.state.category)
    }
    render() {
        return (
            <div className="categories-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-category">New Category:</label>
                    <input type="text" id="new-category" onChange={this.handleChange}/>
                    <button>Submit</button>
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
        addCategory: (id, category) => { dispatch(addCategory(id, category))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
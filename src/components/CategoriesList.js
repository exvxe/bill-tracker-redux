import React from 'react';

const CategoriesList = ({categories, changeHandler}) => {
    const categoriesList = categories.map(category => {
        return (
            <option key={category.id} value={category.id}>{category.name}</option>
        )
    })
    return (
        <select id="category" onChange={changeHandler}>
            {categoriesList}
        </select>
    )
}



export default CategoriesList;
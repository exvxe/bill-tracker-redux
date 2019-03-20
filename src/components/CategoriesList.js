import React from 'react';

const CategoriesList = ({categories}) => {
    const categoriesList = categories.map(category => {
        return (
            <option key={category.id} value={category.id}>{category.name}</option>
        )
    })
    return (
        <select id="category">
            {categoriesList}
        </select>
    )
}



export default CategoriesList;
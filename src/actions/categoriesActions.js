export const addCategory = (id, category) => {
    return  {
        type: 'ADD_CATEGORY',
        id,
        category
    }   
}


export const deleteCategory = (id) => {
    return  {
        type: 'DELETE_CATEGORY',
        id
    }   
}
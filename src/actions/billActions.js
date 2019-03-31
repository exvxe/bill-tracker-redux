export const deleteBill = (id) => {
    return  {
        type: 'DELETE_BILL',
        id
    }
}

export const addBill = (id, title, amount, category, added) => {
    return  {
        type: 'ADD_BILL',
        id,
        title,
        amount,
        category,
        added
    }   
}

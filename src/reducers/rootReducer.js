const initState = {
    bills: [
        {id: '1', title: 'chleb', value: 4.50, category: '1'},
        {id: '2', title: 'rata', value: 200, category: '2'},
        {id: '3', title: 'pączek', value: 0.3, category: '1'}
    ],
    headers: ['category', 'title', 'value'],
    categories: [
        {id: '1', name: 'food'},
        {id: '2', name: 'loan'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE")
    return state;
}

export default rootReducer;
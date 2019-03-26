const initState = {
    bills: [
        {id: '1', title: 'chleb', amount: 4.50, category: '1'},
        {id: '2', title: 'rata', amount: 200, category: '2'},
        {id: '3', title: 'pączek', amount: 0.3, category: '1'}
    ],
    headers: ['category', 'title', 'amount', 'actions'],
    categories: [
        {id: '0', name: 'none'},
        {id: '1', name: 'food'},
        {id: '2', name: 'loan'}
    ],
    lastID: 3
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_BILL":
            let newBills = state.bills.filter(bill => {
                return action.id !== bill.id
            });
            return {
                ...state,
                bills: newBills
            };
        case "ADD_BILL":
            console.log(action);
            return {
                ...state,
                bills: [...state.bills,        
                    {
                        id: action.id,
                        title: action.title,
                        amount: action.amount,
                        category: action.category
                    }
                ],
                lastID: action.id
            }
    }
    return state;
}

export default rootReducer;
const initState = {
    bills: [
        {id: 1, title: 'chleb', amount: 4.50, category: 1, added: '21.02.2019'},
        {id: 2, title: 'rata', amount: 20, category: 2, added: '31.12.2018'},
        {id: 3, title: 'pączek', amount: 0.3, category: 1, added: '3.03.2019'},
        {id: 4, title: 'c', amount: 15, category: 0, added: '3.03.2019'},
        {id: 5, title: 'b', amount: 100, category: 2, added: '3.03.2019'},
        {id: 6, title: 'a', amount: 0.1, category: 2, added: '3.03.2019'},
    ],
    headers: ['title', 'category', 'amount', 'added', 'actions'],
    categories: [
        {id: 0, name: 'none'},
        {id: 1, name: 'food'},
        {id: 2, name: 'loan'}
    ],
    lastID: 6,
    catLastID: 2
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
            return {
                ...state,
                bills: [...state.bills,        
                    {
                        id: action.id,
                        title: action.title,
                        amount: Number(action.amount),
                        category: Number(action.category),
                        added: action.added
                    }
                ],
                lastID: action.id
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                categories: [...state.categories,        
                    {
                        id: action.id,
                        name: action.category
                    }
                ],
                catLastID: action.id
            }
        case "DELETE_CATEGORY":
            let newCategories = state.categories.filter(category => {
                return action.id != category.id
            });
            let newBillsWithCategory = state.bills.filter(bill => {
                if(action.id == bill.category) {
                    bill.category = 0
                    return bill
                } else {
                    return bill
                }
            });
            return {
                ...state,
                bills: newBillsWithCategory,
                categories: newCategories
            };
    }
    return state;
}

export default rootReducer;
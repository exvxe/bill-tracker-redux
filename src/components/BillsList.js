import React from 'react';

import '../styles/billsList.styl';

const BillsList = ({bills, headers, categories, deleteHandler}) => {
    const billsList = bills.map(bill => {
        return (
            <div className="bill" key={bill.id}>
                <span className="bill-category">{categories.find(x => x.id === bill.category).name}</span>
                <span className="bill-title">{bill.title}</span>
                <span className="bill-value">{bill.amount}</span>
                <button className="bill-delete" onClick={() => {deleteHandler(bill.id)}}>Delete</button>
            </div>
        )
    })
    const headersList = headers.map(header => {
        return (
            <span key={header}>{header}</span>
        )
    })
    return (
        <div className="bills-list">
            <span className="bills-list_title">Last bills:</span>
                <div className="bills-list_headers">
                    {headersList}
                </div>
                {billsList}
        </div>
    )
}



export default BillsList;
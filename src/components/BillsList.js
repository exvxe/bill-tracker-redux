import React from 'react';

import '../styles/billsList.styl';

const BillsList = ({bills, headers, categories, handleDelete}) => {
    const billsList = bills.map(bill => {
        return (
            <div className="bill" key={bill.id}>
                <span className="bill-title">{bill.title}</span>
                <span className="bill-category">{categories.find(x => x.id == bill.category).name}</span>
                <span className="bill-amount">{bill.amount}</span>
                <span className="bill-added">{bill.added}</span>
                <button className="bill-delete" onClick={() => {handleDelete(bill.id)}}>Delete</button>
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
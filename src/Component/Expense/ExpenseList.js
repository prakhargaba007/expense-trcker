import React from "react"

import ExpenseItem from "./expenseItem";
import './ExpenseList.css'
let ExpenseList = (props) => {
    // let expensesContent
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No matching expenses</h2>;
    } 
    return <ul className="expenses-list">
        {props.items.map((Expense) => (
            <ExpenseItem
                key={Expense.id}
                title={Expense.title}
                amount={Expense.amount}
                date={Expense.date}
            />
        ))}
    </ul>
}
export default ExpenseList; 
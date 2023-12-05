import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm"
import './NewExpense.css'
function NewExpense(props) {
    let SaveExpenseDataHandler = (enteredExpenseData) => {
        let expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
    {isEditing && <ExpenseFrom  onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler} />}
</div>
}
export default NewExpense;
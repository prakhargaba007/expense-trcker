import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
    const [EnteredTitle, NewTitle] = useState("");
    const [EnteredPrice, NewPrice] = useState("");
    const [EnteredDate, NewDate] = useState("");
    let titleChangeHandler = (event) => {
        NewTitle(event.target.value);
    };
    let amountChangeHandler = (event) => {
        NewPrice(event.target.value);
    };
    let dateChangeHandler = (event) => {
        NewDate(event.target.value);
    };
    // let inputChangeHandler = (identifier, value) => {
    //     if (identifier == 'tittle') {
    //         NewTitle(value)
    //     } else if (identifier == 'date') {
    //         NewDate(value)
    //     } else {
    //         NewPrice(value)
    //     }
    // }
    let submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: EnteredTitle,
            amount: +EnteredPrice,
            date: new Date(EnteredDate),
          };

        props.onSaveExpenseData(expenseData);
        NewTitle('');
        NewPrice('');
        NewDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input
                        type="text"
                        onChange={titleChangeHandler}
                        value={EnteredTitle}
                        placeholder="Enter title"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        onChange={amountChangeHandler}
                        value={EnteredPrice}
                        placeholder="Enter price"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input
                        type="date"
                        onChange={dateChangeHandler}
                        value={EnteredDate}
                        min="2022-01-01"
                        max="2032-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
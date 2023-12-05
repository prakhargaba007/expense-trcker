import "./expenseItem.css";
import  { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
function ExpenseItem(Props) {
    const [title, setTitle]= useState(Props.title);
    // let title = Props.name //--->used before
    function ClickHadler() {
        title = "updated!!!!"
        let newValue = prompt("Enter new title:")
        console.log(newValue)
        setTitle(newValue);
    }
    return <Card className="expense-item Card">
        <ExpenseDate date={Props.date} />
        <div className="expense-item__description">
            <h2>{Props.title}</h2>
            <div className="expense-item__price">₹{Props.amount}</div>
        </div>
        {/* <button onClick={ClickHadler}> Change Title</button> */}
    </Card>
}

export default ExpenseItem;
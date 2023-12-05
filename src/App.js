import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expense from "./Component/Expense/Expense";
import expense_dummy from "./Component/Expense/list";
import NewExpense from "./Component/NewExpense/NewExpense";
function App() {
  const [expense, setExpense] = useState(expense_dummy)

  let addExpenseHandler = (expense) => {
    console.log(expense);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expense} />
    </div>
  );
}

export default App;

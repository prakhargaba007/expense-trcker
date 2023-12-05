import React, { useState } from "react";
import ExpenseItem from "./expenseItem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import './Expense.css'
import ExpensesChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

function Expense(Props) {
  const [filteredYear, setFilterdYear] = useState('2023')

  let filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear)
  }
  // console.log(filteredYear);
  // Filtering the expenses based on year
  let filteredExpenses = Props.item.filter(Expense => {
    return Expense.date.getFullYear().toString() === filteredYear;
  })

  return <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  </div>

}
export default Expense;
import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 26.45,
    date: new Date(2021, 1, 8),
  },
  { id: "e3", title: "carpet", amount: 23.4, date: new Date(2021, 9, 5) },
  {
    id: "e4",
    title: "furniture",
    amount: 123.76,
    date: new Date(2020, 12, 20),
  },
];

const App = () => {
  // for adding expenses by users dynamically
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // call this function in child(NewExpense) and send data from child componant
  const addExpenseHandler = (expense) => {
    // new array = add new expense + existing expenses
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* move data from child to parent by utilizing props to recieve function from parent which call in child componant  */}
      {/* onAddExpense is a function that call in child & send data from child(NewExpense) to parent(App) */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

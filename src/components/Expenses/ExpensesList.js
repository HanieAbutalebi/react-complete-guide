import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  // THIRD =>
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses ...!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          // we should add such a key when mapping out list of item to render efficiently
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;

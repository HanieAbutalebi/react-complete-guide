import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // function for select year to filter expenses
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      /> */}
      </Card>
    </li>
  );
};
export default Expenses;

// FIRST=> inside of JSX we can use :

// {/* show expenses based on filteryear */}
//       {/* && is use in condition if the part before && be true the second part after && will be render */}
//       {filteredExpenses.length === 0 && <p>No Expenses found!</p>}
//       {filteredExpenses.length > 0 &&
//         // use array and map function to create dynamic ExpenseItem
//         // before filter year: props.item.map(){}

//         // after fiter year:
//         filteredExpenses.map((expense) => (
//           <ExpenseItem
//             // we should add such a key when mapping out list of item to render efficiently
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}

// SECOND => for create shorter JSX code we can right it out of JSX and put expensesContent variable inside of JSX :
// let expensesContent = <p>No Expenses found!</p>;
// if (props.items.length > 0) {
//   expensesContent = props.items.map((expense) => (
//     <ExpenseItem
//       // we should add such a key when mapping out list of item to render efficiently
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ));
// }

// Reacr hook : start with use in their name
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      {/* add Event listener click event to button start with 'on' (like onClick) */}
      {/* all the event handler props : (on props) want function as a value */}
      {/* <button onClick={clickHandler}>Click here</button> */}
    </Card>
  );
};

export default ExpenseItem;

import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="div expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

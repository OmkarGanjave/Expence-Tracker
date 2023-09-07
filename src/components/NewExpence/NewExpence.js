import React, { useState } from "react";
import "./NewExpence.css";
import ExpenseForm from "./ExpenseForm";

const NewExpence = (props) => {
  const [isEditing, SetIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    SetIsEditing(true);
  };
  const stopEditingHandler = () => {
    SetIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpence;

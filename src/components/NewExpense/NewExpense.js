import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const Expenses = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const changeFormVisibility = () => setIsVisible(true);
  const addExpenseButton = (
    <div>
      <button onClick={changeFormVisibility}>Add New Expense</button>
    </div>
  );
  const stopEditing = () => {
    setIsVisible(false);
  };

  return (
    <div className="new-expense">
      {!isVisible && addExpenseButton}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          stopEditing={stopEditing}
        />
      )}
    </div>
  );
};

export default Expenses;

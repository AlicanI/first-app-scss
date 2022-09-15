import React from "react";
import { ExpenseForm } from "../../index";
import "./NewExpense.scss";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseTaker={props.onExpenseTaker} />
    </div>
  );
};

export default NewExpense;

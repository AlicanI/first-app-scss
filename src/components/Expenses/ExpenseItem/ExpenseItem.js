import React from "react";
import { ExpenseDate, Card } from "../../index";
import "./ExpenseItem.scss";

const ExpenseItem = (props) => {
  const { data } = props;

  const expenseAmount = data.amount;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.data.date} />
        <div className="expense-item__description">
          <h2>{props.data.title}</h2>
          <div className="expense-item__price">{expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

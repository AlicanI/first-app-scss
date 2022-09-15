import React, { useState } from "react";

import { Card, ExpensesList, ExpenseFilter } from "../../index";

import "./Expenses.scss";

const Expenses = (props) => {
  const [selectedDate, setSelectedDate] = useState("2020");
  const expenses = props.expenses;

  const dateTaker = (data) => {
    setSelectedDate(data.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return selectedDate === expense.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selectedDate={selectedDate} onDateTaker={dateTaker} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");

  const [EnteredDate, setEnteredDate] = useState("");

  const [EnteredAmount, setEnteredAmount] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const ExpenseObject = {
      title: EnteredTitle,
      amount: +EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(ExpenseObject);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }

  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={EnteredAmount}
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={EnteredDate}
            min="2021-1-1"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

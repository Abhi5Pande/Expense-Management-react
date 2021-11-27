import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';
import {useState} from 'react';
function Expenses(props) {
  //console.log('In Expenses.js',props.item);
 
 const [filteredYear, setFilteredYear] = useState('2020');
 const filterChangeHandler = selectedYear => {
     setFilteredYear(selectedYear);
 };
 console.log(filteredYear);
 
 const dateExpense = props.item.filter(filteredExpense => {return filteredExpense.date.getFullYear().toString() === filteredYear})
  return (
    <Card className="expenses">
    <ExpenseChart datapoints={dateExpense}/>
    <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
   <ExpenseList val = {dateExpense} />
    </Card>
  );
}
export default Expenses;

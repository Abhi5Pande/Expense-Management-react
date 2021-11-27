import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const ExpenseInput = (props) => {

    const SaveExpenseData = (ExpenseObject) =>{
        //console.log('form New Expense',ExpenseObject);
        const expenseData = {
            ...ExpenseObject,
            id: Math.random().toString(),
        }
        props.onExpenseCreation(expenseData);
    }
    const [isEditing, setIsEditing] = useState(false)
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (<div className="new-expense"> 
    {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
    {  isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseData} onCancel = {stopEditingHandler}></ExpenseForm>}
    </div>);

}
export default ExpenseInput;
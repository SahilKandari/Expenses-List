import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEntereddate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:'',
    // })

    function titleChangeHandler(event) {
        return setEnteredTitle(event.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput( (pervState) => {
        //     return {...pervState, enteredTitle: event.target.value}
        // })
    }
    function amountChangeHandler(event) {
        return setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
    }
    function dateChangeHandler(event) {
        return setEntereddate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    }
    props.onExpenseData(expenseData)
    setEnteredAmount('') 
    setEnteredTitle('') 
    setEntereddate('')
}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="numbers" value={enteredAmount} min= "0.01" step= "0.01 " onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max = "2022-12-31" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onStopEditing}>Cancel</button>
<button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;

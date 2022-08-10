import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpenses(props) {
  const [startEditingExpense, setStartEditingExpense] = useState(false);
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setStartEditingExpense(false)
  }
  function StartEditingHandler() {
    setStartEditingExpense(true);
  }
  function StopEditingHandler() {
    setStartEditingExpense(false);
  }
  return (
    <div className="new-expense">
      {!startEditingExpense && (
        <button onClick={StartEditingHandler}>Add New Expense</button>
      )}
      {startEditingExpense && (
        <ExpenseForm onExpenseData={saveExpenseDataHandler} onStopEditing = {StopEditingHandler} />
      )}
    </div>
  );
}
export default NewExpenses;

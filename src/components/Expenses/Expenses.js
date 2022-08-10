import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredValue, setFilteredValue] = useState("2020");
  function filteredData(selectedYear) {
    setFilteredValue(selectedYear);
  }
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredValue} onChangeFilter={filteredData} />
      <ExpensesChart expenses = {filteredItems} />
      <ExpenseList onItems={filteredItems} />

    
    </Card>
  );
}
export default Expenses;

import "./ExpenseList.css";
import ExpenseItems from "./ExpenseItems";
function ExpenseList(props) {
    const filteredItems = props.onItems



const handleItems = () => {
  
  if(filteredItems.length === 0) {
    return <p>No Expense Found.</p>
  }
  if(filteredItems.length > 0) {
    return filteredItems.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
}   

  return (
    <>
    {handleItems()}
    
    </>
    
  //   <div>
  //     {/* {filteredItems.length === 0 && <p>No Expense Found.</p>} */}
  //     {filteredItems.length > 0 &&
  //       filteredItems.map((expense) => (
  //         <ExpenseItems
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         />
  //       ))}
  //         {/* {filteredItems.length === 0 ? (
  //       <p>No Expense Found.</p>
  //     ) : (
  //       filteredItems.map((expense) => (
  //         <ExpenseItems
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         />
  //       ))
  //     )} */}
  //   </div>
  );
}
export default ExpenseList;

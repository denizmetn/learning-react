import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem=({ date, amount, title }) =>{
  const [newTitle,setNewTitle]=useState(title);
  const[newAmount,setNewAmount] = useState(amount);

  const increaseAmount =() =>{
    setNewAmount(newAmount+10);
  };

  const decreaseAmount= () =>{
    setNewAmount( newAmount -10);
  }


  const clickHandler =() =>{
    console.log("newTitle value : "+ newTitle); 
    setNewTitle("Updated");
    console.log("Clicked");
    console.log("newTitle value : " + newTitle);
    
    
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      
      <div className="expense-item__description">
        <div>{newTitle}</div>
        <div className="expense-item__price">${newAmount.toFixed(2)}</div>
      </div>
      <div>
      <button onClick={increaseAmount}>+</button>
      <button onClick={decreaseAmount}>-</button>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;

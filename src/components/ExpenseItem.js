import React from 'react'
import './ExpenseItem.css'
import './ExpenseDate.css'
import ExpenceDate from './ExpenceDate';

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
   <ExpenceDate date={props.date}/>
        <div className="div expense-item__description">
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem;

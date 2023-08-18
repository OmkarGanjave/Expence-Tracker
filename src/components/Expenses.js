import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className='expenses'>
    {props.expenses.map((e)=>(
        <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>
      ))}
      
    </div>
  )
}

export default Expenses

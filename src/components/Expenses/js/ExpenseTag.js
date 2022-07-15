import React from 'react';
import classes from './ExpenseTag.module.css'

const ExpenseTag = props => {
  return (
    <span className={classes.badge} >{props.tag}</span>
  )
}

export default ExpenseTag
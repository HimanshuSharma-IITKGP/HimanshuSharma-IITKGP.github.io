import { useState } from 'react'
import classes from '../css/NewExpense.module.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [state, setState] = useState('hide');

    const toggleState = () => {
        if (state === 'show') {
            setState('hide');
        }
        else if (state === 'hide') {
            setState('show');
        }
    }

    if (state === "show") {
        return (
            <div className={classes['new-expense']}>
                <ExpenseForm onSaveExpenseData={props.onAddExpense} toggleState={toggleState} tagList={props.tagList}/>
            </div>
        )
    }

    else if (state === 'hide') {
        return (
            <div className={classes['new-expense']}>
                <button onClick={toggleState}>Add New Expense</button>
            </div>
        )
    }


}

export default NewExpense;
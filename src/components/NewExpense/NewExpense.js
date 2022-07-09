import { useState } from 'react'
import './NewExpense.css'
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
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={props.onAddExpense} toggleState={toggleState} />
            </div>
        )
    }

    else if (state === 'hide') {
        return (
            <div className="new-expense">
                <button onClick={toggleState}>Add New Expense</button>
            </div>
        )
    }


}

export default NewExpense;
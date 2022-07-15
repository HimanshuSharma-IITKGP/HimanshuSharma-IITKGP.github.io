import React from 'react'
import Card from '../../UI/Card';
import classes from '../css/TotalExpense.module.css'

const TotalExpense = props => {
    let total = 0;
    for (let expense of props.filteredList) {
        // console.log(expense)
        total += expense.amount;
    }

    return (
        <Card className={classes['total_expense-item']}>
            <h2>Total Expenditure</h2>
            <div className={classes['total_expense-item__price']}>₹ {total}</div>
        </Card>
    )
}

export default TotalExpense;
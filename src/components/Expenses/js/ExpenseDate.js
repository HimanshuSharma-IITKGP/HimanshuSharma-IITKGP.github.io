import classes from  '../css/ExpenseDate.module.css'

export default function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className={classes['expense-date']}>
        <div className={classes['expense-date__month']} >{month}</div>
        <div className={classes['expense-date__year']} >{day}</div>
        <div className={classes['expense-date__day']} >{year}</div>
    </div>
    )
}
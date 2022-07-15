import ExpenseDate from './ExpenseDate'
import Card from '../../UI/Card'
import {Trash3} from 'react-bootstrap-icons'
import classes from '../css/ExpenseItem.module.css'

export default function ExpenseItem(props){

    const deleteHandler = () =>{
        props.onDelete(props.id);
    }

    console.log(props.tag)

    return (
        <li>
            <Card className={classes['expense-item']}>   
                <ExpenseDate date={props.date}/>
                <div className={classes['expense-item__description']}>
                    <h2 className={classes['title']}>{props.title}</h2>
                    {/* <h2></h2> */}
                    {/* <span className='badge'>{props.tag}</span> */}
                    <div className={classes['myDiv']}>
                        <div className={classes['insideMyDiv']}>
                            <div className={classes['expense-item__price']}>₹ {props.amount}</div>
                            <button onClick={deleteHandler} > <Trash3 /> </button>
                        </div>
                        <span className={classes['badge']}>{props.tag}</span>
                    </div>
                </div>
            </Card>
        </li>
    )
}
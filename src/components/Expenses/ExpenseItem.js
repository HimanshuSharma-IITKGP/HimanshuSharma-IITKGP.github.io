import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

export default function ExpenseItem(props){

    const deleteHandler = () =>{
        props.onDelete(props.id);
    }

    return (
        <li>
            <Card className='expense-item'>   
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='myDiv'>
                        <div className='expense-item__price'>$ {props.amount}</div>
                        <button onClick={deleteHandler} >Delete</button>
                    </div>
                </div>
            </Card>
        </li>
    )
}
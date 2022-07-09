import {useState} from 'react' ;
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('') ;
    const [enteredAmount, setEnteredAmount] = useState('') ;
    const [enteredDate, setEnteredDate] = useState('') ;
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isAmountValid, setIsAmountValid] = useState(true) ;

    const titleChangeHandler = (event) => {
        setIsTitleValid(true); 
        setEnteredTitle(event.target.value) ;
    }

    const amountChangeHandler = (event) => {
        setIsAmountValid(true) ;
        setEnteredAmount(event.target.value) ;
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value) ;
    }

    const submitHandler = (event) => {
        event.preventDefault() ; // by using this function the page will not reload on submitting the form
        if(enteredTitle.trim().length===0){
            setIsTitleValid(false);
            return ;
        }
        setIsTitleValid(true);
        if(enteredAmount<=0){
            setIsAmountValid(false);
        }
        setIsAmountValid(true);
        let expenseData = {
            title:  enteredTitle,
            amount: +enteredAmount,
            date:   new Date(enteredDate)
        }
        
        expenseData = {
            ...expenseData,
            id: Math.random().toString() 
        }
        // console.log(expenseData);
        
        props.onSaveExpenseData(expenseData);

        /* these three lines are doing the work of clearing the form but we would not 
        be able to do so if we didn't gave back the value of that input to be 
        the respective state i.e., the two way binding */
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.toggleState() ;
    } 

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className={`new-expense__control ${!isTitleValid && 'new-expense__control_invalid'}`}>
                    <label>Title</label>
                    <input  type='text' 
                            value={enteredTitle} 
                            onChange={titleChangeHandler} />
                </div>
                <div className={`new-expense__control ${!isAmountValid && 'new-expense__control_invalid'}`} >
                    <label>Amount</label>
                    <input  type='number' 
                            min='0.01' 
                            step='0.01' 
                            value={enteredAmount}
                            onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input  type='date'  
                            min='2019-01-01' 
                            max='2022-12-31' 
                            value={enteredDate} 
                            onChange={dateChangeHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button onClick={props.toggleState} type='button' >Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
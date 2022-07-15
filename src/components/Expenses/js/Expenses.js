import {useState} from 'react'
import Card from '../../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Sorting from './Sorting'
import TotalExpense from './TotalExpense'


import classes from  '../css/Expenses.module.css'


export default function Expenses(props){
    const [year, setYear] = useState('2022') ;
    const [sortMode, setSortMode] = useState('Amount') ;
    const [order, setOrder] = useState('Increasing') ;
    const [tag, setTag] = useState('All') ;

    const yearChangeHandler = (year) => {
        setYear(year) ;
    }

    const tagChangeHandler = (tag) => {
        setTag(tag);
    }


    const sortModeChangeHandler = (mode) =>{
        setSortMode(mode) ;
    }

    const orderChangeHandler = (od) =>{
        setOrder(od) ;
    }

    const filteredList = props.expenses.filter((ex) => {
        if(tag === 'All'){
            return ex.date.getFullYear().toString() === year;
        }else{
            return ex.date.getFullYear().toString()===year && ex.tag === tag ;
        }
    });



    return (
        <Card className={classes['expenses']}>
            <ExpensesChart filteredList={filteredList} />
            <ExpensesFilter onYearChange={yearChangeHandler} year={year} tagList={props.tagList} tag={tag} onTagChange={tagChangeHandler}/>
            { filteredList.length>0 && <Sorting onSortModeChange={sortModeChangeHandler} sortMode={sortMode} onOrderChange={orderChangeHandler} />}
            <ExpensesList filteredList={filteredList} onDelete={props.onDelete} sortMode={sortMode}  order={order} />
            { filteredList.length>0 && <TotalExpense  filteredList={filteredList} /> }
        </Card>
    )
}
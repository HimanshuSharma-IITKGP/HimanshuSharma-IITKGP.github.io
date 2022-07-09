import {useState} from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Sorting from './Sorting'
import TotalExpense from './TotalExpense'


import './Expenses.css'


export default function Expenses(props){
    const [year, setYear] = useState('2022') ;
    const [sortMode, setSortMode] = useState('Amount') ;
    const [order, setOrder] = useState('Increasing')

    const yearChangeHandler = (year) => {
        setYear(year) ;
    }

    const sortModeChangeHandler = (mode) =>{
        // console.log('sort mode changed') ;
        setSortMode(mode) ;
    }

    const orderChangeHandler = (od) =>{
        setOrder(od) ;
    }

    const filteredList = props.expenses.filter((ex) => {
        return ex.date.getFullYear().toString()===year
    });



    return (
        <Card className='expenses'>
            <ExpensesChart filteredList={filteredList} />
            <ExpensesFilter onYearChange={yearChangeHandler} year={year}/>
            { filteredList.length>0 && <Sorting onSortModeChange={sortModeChangeHandler} sortMode={sortMode} onOrderChange={orderChangeHandler} />}
            <ExpensesList filteredList={filteredList} onDelete={props.onDelete} sortMode={sortMode}  order={order} />
            { filteredList.length>0 && <TotalExpense  filteredList={filteredList} /> }
        </Card>
    )
}
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {

    if (props.filteredList.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }

    // console.log(props.order)

    if(props.sortMode==='Amount'){
        // console.log(typeof(props.filteredList[0].amount))
        // console.log('amount')

        if(props.order === 'Increasing'){
            // console.log('amount increasing')
            props.filteredList.sort((a, b)=>{
                return a.amount - b.amount ; //increasing order of amount
            })
        }
        else if(props.order === 'Decreasing'){
            // console.log('amount Decreasing')
            props.filteredList.sort((a, b)=>{
                return b.amount - a.amount ; 
            })
        }
    }

    else if(props.sortMode === 'Date'){
        // console.log('date')
        if(props.order === 'N2O'){
            // console.log('Date Increasing')
            props.filteredList.sort((a, b)=>{
                return a.date.getTime() - b.date.getTime();
            })
        }
        else if(props.order === 'O2N'){
            // console.log('Date Decreasing')
            props.filteredList.sort((a, b)=>{
                return b.date.getTime() - a.date.getTime(); //decreasing order of date
            })
        }

    }

    // console.log(props.filteredList)

    const sortedDomExpensesList = props.filteredList.map((ex) => {
        return <ExpenseItem
            title={ex.title}
            amount={ex.amount}
            date={ex.date}
            onDelete={props.onDelete}
            id={ex.id}
            key={ex.id}
        />
    })

    return (
        <ul className='expenses-list'>
            {
                sortedDomExpensesList
            }
        </ul>
    )
}

export default ExpensesList
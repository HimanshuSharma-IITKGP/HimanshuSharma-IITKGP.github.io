import {useState, useEffect} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    
    if(localStorage.getItem('expenses')){
      // console.log(typeof(JSON.parse(localStorage.getItem('expenses'))[0].date))
      // setExpenses(JSON.parse(localStorage.getItem('expenses')));
      
      const exp = JSON.parse(localStorage.getItem('expenses'));
      const datesString = exp.map((e)=>{
        return e.date
      })
      const datesObject = datesString.map((d)=>{
        return new Date(d) ;
      })
      // console.log(datesString) ;
      // console.log(datesObject) ;

      const axp = exp.map((f,i)=>{
        return {
          ...f,
          date : datesObject[i]
        }
      })

      // console.log(axp) ;

      setExpenses(axp) ;
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) )
  }, [expenses])
  
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev] ;
    })
  }

  const deleteExpenseHandler = (thisId) => {
    // console.log('deleteExpenseHandler');

    setExpenses((prevExpenses)=>{
      return prevExpenses.filter((expense)=>{
        return expense.id !== thisId ;
      })
    })
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} onDelete={deleteExpenseHandler} />
    </div>
  );
}

export default App;

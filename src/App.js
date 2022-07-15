import { useState, useEffect } from 'react'
import Expenses from './components/Expenses/js/Expenses'
import NewExpense from './components/NewExpense/js/NewExpense'

function App() {

	const [expenses, setExpenses] = useState([]);
	const tagList = ['All', 'Housing', 'Transportation', 'Food', 'Utilities', 'Clothing', 'Healthcare', 'Insurance', 'Household Items', 'Personal', 'Debt', 'Education', 'Entertainment', 'Miscellaneous'];

	useEffect(() => {

		if (localStorage.getItem('expenses')) {
			// console.log(typeof(JSON.parse(localStorage.getItem('expenses'))[0].date))
			// setExpenses(JSON.parse(localStorage.getItem('expenses')));

			const exp = JSON.parse(localStorage.getItem('expenses'));
			const datesString = exp.map((e) => {
				return e.date
			})
			const datesObject = datesString.map((d) => {
				return new Date(d);
			})
			// console.log(datesString) ;
			// console.log(datesObject) ;

			const axp = exp.map((f, i) => {
				return {
					...f,
					date: datesObject[i]
				}
			})

			// console.log(axp) ;

			setExpenses(axp);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('expenses', JSON.stringify(expenses))
	}, [expenses])

	const addExpenseHandler = (expense) => {
		console.log(expense)
		setExpenses((prev) => {
			return [expense, ...prev];
		})
	}

	const deleteExpenseHandler = (thisId) => {
		// console.log('deleteExpenseHandler');

		setExpenses((prevExpenses) => {
			return prevExpenses.filter((expense) => {
				return expense.id !== thisId;
			})
		})
	}




	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} tagList={tagList} />
			<Expenses expenses={expenses} onDelete={deleteExpenseHandler} tagList={tagList} />
		</div>
	);
}

export default App;

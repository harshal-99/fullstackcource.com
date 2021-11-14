import { useState } from "react";
import Names        from "./components/Names";
import PersonForm   from "./components/PersonForm";

const App = () => {
	const [ person, setPerson ] = useState([
		{name: 'Arto Hellas', number: '040-123456', id: 1},
		{name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
		{name: 'Dan Abramov', number: '12-43-234345', id: 3},
		{name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
	])

	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ search, setSearch ] = useState("")
	const [ searchResult, setSearchResult ] = useState([])

	const addName = (event) => {
		event.preventDefault()
		if (person.find(name => name.name === newName)) {
			alert(`${newName} already exists`)
		} else {
			setPerson(person.concat({
				name: newName,
				number: newNumber,
				id: Math.random() * 10
			}))
		}
		setNewName("")
		setNewNumber("")
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleSearchChange = (event) => {
		setSearch(event.target.value)

	}

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<div>filter shown with</div>
				<div><input type="text" value={search}
				            onChange={handleSearchChange}/></div>
				<ul>
					{searchResult.map(res => <li key={res}>{res}</li>)}
				</ul>
			</div>
			<h3>Add a new</h3>
			<PersonForm addName={addName} newName={newName}
			            handleNameChange={handleNameChange}
			            handleNumberChange={handleNumberChange}
			            newNumber={newNumber}
			/>
			<h2>Numbers</h2>
			<Names person={person}/>
		</div>
	)
}

export default App;

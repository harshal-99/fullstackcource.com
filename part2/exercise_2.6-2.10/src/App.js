import { useEffect, useState } from "react";
import axios                   from "axios";

import Names      from "./components/Names";
import PersonForm from "./components/PersonForm";

const App = () => {
	const [ person, setPerson ] = useState([])
	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ search, setSearch ] = useState("")
	const [ searchResult, setSearchResult ] = useState([])

	useEffect(() => {
		axios
			.get("http://localhost:3001/persons")
			.then(res => setPerson(res.data))
	}, [])

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
		setSearchResult(person.filter(per =>
			per.name.toLowerCase()
				.includes(search.toLowerCase())))
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<div>
				<div>filter shown with</div>
				<div><input type="text" value={search}
				            onChange={handleSearchChange}/></div>
				<ul>
					{searchResult.map(res => <li key={res.id}>{res.name}</li>)}
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

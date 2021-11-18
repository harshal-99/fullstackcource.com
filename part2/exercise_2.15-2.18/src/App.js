import { useEffect, useState } from "react";

import Names      from "./components/Names";
import PersonForm from "./components/PersonForm";

import utils from "./services/utils";

const App = () => {
	const [ person, setPerson ] = useState([])
	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ search, setSearch ] = useState("")
	const [ searchResult, setSearchResult ] = useState([])

	useEffect(() => {
		utils
			.getAll()
			.then(initialPerson => {
				setPerson(initialPerson)
			})
	}, [])

	const addName = (event) => {
		event.preventDefault()
		if (person.find(name => name.name === newName)) {
			alert(`${newName} already exists`)
		} else {
			utils
				.create({
					name: newName,
					number: newNumber,
					id: person.length + 1
				})
				.then(returnedPerson => {
					setPerson(person.concat(returnedPerson))
				})
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

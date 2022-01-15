import { useEffect, useState } from "react";

import Names      from "./components/Names";
import PersonForm from "./components/PersonForm";

import utils        from "./services/utils";
import Notification from "./components/Notification";

const App = () => {
	const [ person, setPerson ] = useState([])
	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")
	const [ search, setSearch ] = useState("")
	const [ searchResult, setSearchResult ] = useState([])
	const [ successMessage, setSuccessMessage ] = useState(null)

	useEffect(() => {
		utils
			.getAll()
			.then(initialPerson => {
				setPerson(initialPerson)
			})
	}, [])


	const addName = (event) => {
		event.preventDefault()
		const foundPerson = person.find(name => name.name === newName)
		if (foundPerson) {
			let message = null
			if (window.confirm(`${newName} already added to phonebook, replace old number with new one ?`)) {
				utils
					.updatePerson(foundPerson.id, {
						number: newNumber,
						name: foundPerson.name
					})
					.then(returnedPerson => {
						setPerson(prevState => {
							const newArray = prevState.map(val => val)
							for (let i = 0; i < newArray.length; i++) {
								if (newArray[i].name === returnedPerson.name) {
									newArray[i].number = returnedPerson.number
								}
							}
							return newArray
						})
					})
					.catch(error => {
						console.log(error)
						if (error.response.status === 404) {
							message = `${foundPerson.name} doesn't exists.`
						}
					})
				setSuccessMessage(message
					? message
					: `Updated ${foundPerson.name}`)
			}
		} else {
			utils
				.create({
					name: newName,
					number: newNumber,
					id: Math.random() * 100
				})
				.then(returnedPerson => {
					setPerson(person.concat(returnedPerson))
					setSuccessMessage(`Added ${returnedPerson.name}`)
				})
				.catch(error => console.log(error))

		}
		setTimeout(() => {
			setSuccessMessage(null)
		}, 5000)
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
			<Notification message={successMessage}/>
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
			<Names person={person} deletePerson={utils.deletePerson}
			       setSuccessMessage={setSuccessMessage}/>
		</div>
	)
}

export default App;

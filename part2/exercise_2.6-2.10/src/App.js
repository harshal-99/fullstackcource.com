import { useState } from "react";
import Names        from "./components/Names";

const App = () => {
	const [ person, setPerson ] = useState([
		{
			name: "Arto Hellas",
			number: "1234567890"
		}
	])

	const [ newName, setNewName ] = useState("")
	const [ newNumber, setNewNumber ] = useState("")

	const addName = (event) => {
		event.preventDefault()
		if (person.find(name => name.name === newName)) {
			alert(`${newName} already exists`)
		} else {
			setPerson(person.concat({name: newName, number: newNumber}))
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

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					<div> name: <input type="text" value={newName}
					                   onChange={handleNameChange}/></div>
					<div>number: <input type="text" value={newNumber}
					                    onChange={handleNumberChange}/></div>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{person.map(per => <Names key={per["name"]}
				                          name={per["name"]}
				                          number={per["number"]}/>)}
			</ul>
		</div>
	)
}

export default App;

import { useState } from "react";
import Names        from "./components/Names";

const App = () => {
	const [ person, setPerson ] = useState([
		{name: "Arto Hellas"}
	])

	const [ newName, setNewName ] = useState("")

	const addName = (event) => {
		event.preventDefault()
		setPerson(person.concat({name: newName}))
		setNewName("")
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					name: <input type="text" value={newName}
					             onChange={handleNameChange}/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{person.map(per => <Names key={per["name"]}
				                          name={per["name"]}/>)}
			</ul>
		</div>
	)
}

export default App;

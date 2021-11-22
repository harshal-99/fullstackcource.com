const PersonForm = (props) => {
	return (
		<form onSubmit={props.addName}>
			<div>
				<div> name: <input type="text" value={props.newName}
				                   onChange={props.handleNameChange}/></div>
				<div>number: <input type="text" value={props.newNumber}
				                    onChange={props.handleNumberChange}/></div>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm
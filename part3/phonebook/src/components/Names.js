const Names = (props) => {

	return (
		<ul>
			{props.person.map(per =>
				<li key={per.id} className="person">
					{per.name} {per.number}
					<button onClick={() => {
						if (window.confirm(`Delete ${per.name} ?`)) {
							props.deletePerson(per.id)
							props.setSuccessMessage(`Deleted ${per.name}`)
							setTimeout(() => {
								props.setSuccessMessage(null)
							}, 5000)
						}
					}}>
						delete
					</button>
				</li>)}
		</ul>
	)
}

export default Names
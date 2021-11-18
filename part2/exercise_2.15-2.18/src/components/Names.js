const Names = (props) => {

	return (
		<ul>
			{props.person.map(per =>
				<li key={per.id}>
					{per.name} {per.number}
					<button onClick={() => {
						if (window.confirm(`Delete ${per.name} ?`)) {
							props.deletePerson(per.id)
						}
					}}>
						delete
					</button>
				</li>)}
		</ul>
	)
}

export default Names
const Names = (props) => {
	return (
		<ul>
			{props.person.map(per =>
				<li key={per.id}>
					{per.name} {per.number}
				</li>)}
		</ul>
	)
}

export default Names
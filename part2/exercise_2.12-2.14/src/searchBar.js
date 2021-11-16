import { useState } from "react";

const searchBar = ({countries}) => {
	const [ searchInput, setSearchInput ] = useState()

	const handleChange = (event) => {
		setSearchInput(event.target.value)
		if (setSearchInput.length > 0) {
			countries.filter(country => country.name["common"].match(searchInput))
		}
	}

	return (
		<>
			<input type="text"
			       placeholder="search"
			       onChange={handleChange}
			       value={searchInput}/>

			<ul>
				{countries.map(country => <li
					key={country["fifa"]}>{country.name["common"]}</li>)}
			</ul>
		</>
	)
}
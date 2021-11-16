import { useEffect, useState } from "react";

import axios from "axios";


const App = () => {
	const [ searchInput, setSearchInput ] = useState("")
	const [ searchResults, setSearchResults ] = useState([])
	const [ countries, setCountries ] = useState([])

	const handleInputChange = (event) => {
		event.preventDefault()
		setSearchInput(event.target.value)
		if (setSearchInput.length > 0) {
			setSearchResults(countries.filter(country =>
				country.name["common"].toLowerCase().match(searchInput.toLowerCase())))
		}

	}

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/all`)
			.then(res => setCountries(res.data))
			.catch(err => console.log(err))
	}, [])


	return (
		<form>
			<div>
				<input type="text" value={searchInput}
				       onChange={handleInputChange}/>
			</div>
			<div>
				<div>
					{searchResults.length <= 10 ?
						searchResults.length === 1 ?
							<div>
								<h1>{searchResults[0].name["common"]}</h1>
								<div>capital {searchResults[0]["capital"][0]}</div>
								<div>region {searchResults[0]["region"]} < /div>
							</div> :
							searchResults.map(country => <div
								key={country["fifa"]}>{country.name["common"]}</div>)
						: <div key={Math.random() * 10}>Too many matches, specify
							your query</div>
					}
				</div>
			</div>
		</form>
	);
}

export default App;

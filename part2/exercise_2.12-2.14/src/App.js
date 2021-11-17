import { useEffect, useState } from "react";

import axios   from "axios";
import classes from "./App.module.css"

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

	const showDetailedView = (name, capital, region, flag) => {
		return (
			<div>
				<h1>{name}</h1>
				<div>capital {capital}</div>
				<div>region {region} < /div>
				<div
					className={classes.big}>{flag}</div>
			</div>
		)
	}

	return (
		<form onSubmit={event => event.preventDefault()}>
			<div>
				<input type="text" value={searchInput}
				       onChange={handleInputChange}/>
			</div>
			<div>
				<div>
					{searchResults.length <= 10 ?
						searchResults.length === 1 ?
							<div>
								{showDetailedView(searchResults[0].name["common"],
									searchResults[0]["capital"][0],
									searchResults[0]["region"],
									searchResults[0]["flag"])}
							</div> :
							searchResults.map((country, index) => <div
								key={country["fifa"]}>
								{country.name["common"]}
							</div>)
						: <div key={Math.random() * 10}>Too many matches, specify
							your query</div>
					}
				</div>
			</div>
		</form>
	);
}

export default App;

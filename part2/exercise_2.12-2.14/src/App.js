import { useEffect, useState } from "react";

import axios  from "axios";
import dotenv from "dotenv"

import classes from "./App.module.css"

dotenv.config()

const App = () => {
	const [ searchInput, setSearchInput ] = useState("")
	const [ searchResults, setSearchResults ] = useState([])
	const [ countries, setCountries ] = useState([])

	const baseURL = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=`

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

	const getWeatherData = () => {
		countries.forEach(country => {
			let result = axios
				.get(baseURL + country["capital"])
				.then(res => res.data)
			console.log(result['current'])
			country['temperature'] = result['current']['temperature']
			country['weather_icons'] = result['current']['weather_icons'][0]
			country['wind_speed'] = result['current']['wind_speed']
			country['wind_dir'] = result['current']['wind_dir']
		})
	}
	getWeatherData()
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
								<h2>Weather in {searchResults[0]["capital"][0]}</h2>
								<div>temperature: {searchResults[0]["temperature"]} Census</div>
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

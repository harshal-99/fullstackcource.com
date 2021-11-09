import React, { useEffect, useState } from "react";
import Button                         from "./components/Button";

const Statistics = (props) => {
	const [ all, setAll ] = useState(0)
	const [ average, setAverage ] = useState(0)
	const [ positive, setPositive ] = useState(0)

	const {good, bad, neutral} = props

	useEffect(() => {
		setAll(good + bad + neutral)
		setAverage(good - bad)
		let res = all ? (good * 100) / all : 0
		setPositive(res)
	}, [ good, bad, neutral, all ])
	return (
		<>
			<div>{"all " + all}</div>
			<div>{"average " + average}</div>
			<div>{"positive " + positive + "%"}</div>
		</>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [ good, setGood ] = useState(0)
	const [ bad, setBad ] = useState(0)
	const [ neutral, setNeutral ] = useState(0)


	return (
		<div>
			<h2>give feedback</h2>
			<div className="buttons">
				<Button onClick={() => {
					setGood(prev => prev + 1)
				}} text="good"/>
				<Button onClick={() => {
					setNeutral(prev => prev + 1)
				}} text="neutral"/>
				<Button onClick={() => {
					setBad(prev => prev + 1)
				}} text="bad"/>
			</div>
			<h2>statistics</h2>
			<div>{"good " + good}</div>
			<div>{"neutral " + neutral}</div>
			<div>{"bad " + bad}</div>
			<Statistics good={good} bad={bad} neutral={neutral}/>
		</div>
	)
}

export default App;

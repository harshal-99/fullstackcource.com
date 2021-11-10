import React, { useState } from "react";
import Button              from "./components/Button";
import Statistics          from "./components/Statistics";
import StatisticLine       from "./components/StatisticLine";


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
			<table>
				<tbody>
				<StatisticLine text="good" value={good}/>
				<StatisticLine text="neutral" value={neutral}/>
				<StatisticLine text="bad" value={bad}/>
				{(good !== 0 || neutral !== 0 || bad !== 0) ? (
					<Statistics good={good} bad={bad} neutral={neutral}/>
				) : <tr>
					<td>No feedback given</td>
				</tr>}
				</tbody>
			</table>
		</div>
	)
}

export default App;

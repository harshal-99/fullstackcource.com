import React, { useEffect, useState } from "react";
import StatisticLine                  from "./StatisticLine";

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
			<StatisticLine text="all" value={all}/>
			<StatisticLine text="average" value={average}/>
			<StatisticLine text="positive" value={positive}/>
		</>
	)
}

export default Statistics
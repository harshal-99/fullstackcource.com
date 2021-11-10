import React, { useEffect, useState } from "react";

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
	]

	const [ selected, setSelected ] = useState(0)
	const [ points, setPoints ] = useState(new Array(anecdotes.length).fill(0))
	const [ highestVotes, setHighestVotes ] = useState(0)

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max)
	}

	const handleNextClick = () => {
		setSelected(getRandomInt(anecdotes.length))
	}

	useEffect(() => {
		let maxVotes = 0
		for (let i = 0; i < points.length; i++) {
			if (points[i] > maxVotes)
				maxVotes = i
		}
		setHighestVotes(maxVotes)
		console.log(points)
	}, [points])

	const handleVoteClick = () => {
		setPoints(prev => {
			let arr = [ ...prev ]
			arr[selected] += 1
			return arr
		})
	}

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<div>{anecdotes[selected]}</div>
			<div>has {points[selected]} votes</div>
			<button onClick={handleVoteClick}>vote</button>
			<button onClick={handleNextClick}>next anecdote</button>
			<h2>Anecdote with most votes</h2>
			<div>{anecdotes[highestVotes]}</div>
			<div>has {points[highestVotes]} votes</div>
		</div>
	)
}

export default App;

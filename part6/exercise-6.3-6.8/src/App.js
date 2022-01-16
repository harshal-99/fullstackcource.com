import React from 'react'
import Anecdotes from "./components/Anecdote";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";

const App = () => {

	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification/>
			<Anecdotes/>
			<h2>create new</h2>
			<NewAnecdote/>
		</div>
	)
}

export default App

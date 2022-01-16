import React, {useEffect} from 'react'
import Anecdotes from "./components/Anecdote";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import Filter from "./components/Filter";
import {useDispatch} from "react-redux";
import anecdoteService from "./services/anecdotes";
import {initializeAnecdotes} from "./reducers/anecdoteReducer";

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		anecdoteService
			.getAll()
			.then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
	}, [])

	return (
		<div>
			<h2>Anecdotes</h2>
			<Notification/>
			<Filter/>
			<Anecdotes/>
			<h2>create new</h2>
			<NewAnecdote/>
		</div>
	)
}

export default App

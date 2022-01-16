import {useDispatch} from "react-redux";
import {hideNotification, setNotification} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";
import {createdAnecdote} from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch(createdAnecdote(newAnecdote))
		dispatch(setNotification(content))
		setTimeout(() => {
			dispatch(hideNotification())
		}, 5000)
	}

	return (
		<form onSubmit={addAnecdote}>
			<input type="text" name="anecdote"/>
			<button type="submit">create</button>
		</form>
	)
}

export default NewAnecdote

import {useDispatch} from "react-redux";
import {hideNotification, setNotification} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const NewAnecdote = () => {
	const dispatch = useDispatch()

	const addAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		// dispatch(createdAnecdote(content))
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
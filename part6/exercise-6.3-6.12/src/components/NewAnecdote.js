import {useDispatch} from "react-redux";
import {setNotification} from "../reducers/notificationReducer";
import {createdAnecdote} from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
	const dispatch = useDispatch()

	const addAnecdote = async (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		dispatch(createdAnecdote(content))
		dispatch(setNotification(content, 5))
	}

	return (
		<form onSubmit={addAnecdote}>
			<input type="text" name="anecdote"/>
			<button type="submit">create</button>
		</form>
	)
}

export default NewAnecdote

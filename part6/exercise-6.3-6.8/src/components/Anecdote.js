import {useDispatch, useSelector} from "react-redux";
import {updateVote} from "../reducers/anecdoteReducer";

const Anecdote = ({anecdote, handleClick}) => {
	return (
		<li>
			<div>
				{anecdote.content}
			</div>
			<div>has {anecdote.votes}</div>
			<button onClick={() => handleClick(anecdote.id)}>vote</button>
		</li>
	)
}

const Anecdotes = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector(state => state)

	return (
		<ul>
			{anecdotes.map(anecdote =>
				<Anecdote
					key={anecdote.id}
					anecdote={anecdote}
					handleClick={() => dispatch(updateVote(anecdote.id))}
				/>
			)}
		</ul>
	)
}

export default Anecdotes

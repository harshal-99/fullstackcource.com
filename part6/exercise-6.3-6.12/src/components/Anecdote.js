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
	const anecdotes = useSelector(({filter, anecdote}) => {
		if (filter === null) {
			return anecdote
		}
		const regex = new RegExp(filter, 'i')
		return anecdote.filter(anecdote => anecdote.content.match(regex))
	})

	const sortVotes = (a, b) => b.votes - a.votes

	return (
		<ul>
			{anecdotes.sort(sortVotes).map(anecdote =>
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

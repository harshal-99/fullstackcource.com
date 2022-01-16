const anecdoteReducer = (state = [], action) => {
	switch (action.type) {
		case 'INCREMENT': {
			const id = action.data.id
			const anecdoteToChange = state.find(a => a.id === id)
			const changedAnecdote = {
				...anecdoteToChange,
				votes: anecdoteToChange.votes + 1
			}

			return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
		}
		case 'NEW_ANECDOTE': {
			return [...state, action.data]
		}
		case 'INIT_ANECDOTES':
			return action.data
		default:
			return state

	}
}

export const updateVote = (id) => {
	return {
		type: 'INCREMENT',
		data: {id}
	}
}

/*export const createdAnecdote = anecdote => {
	return {
		type: 'NEW_ANECDOTE',
		data: {
			content: anecdote,
			id: getId(),
			votes: 0
		}
	}
}*/

export const initializeAnecdotes = (anecdotes) => {
	return {
		type: 'INIT_ANECDOTES',
		data: anecdotes
	}
}

export default anecdoteReducer

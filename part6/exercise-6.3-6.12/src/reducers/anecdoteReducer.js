import anecdoteService from "../services/anecdotes";

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

export const createdAnecdote = anecdote => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(anecdote)
		dispatch({
			type: 'NEW_ANECDOTE',
			data: {
				content: newAnecdote.content,
				id: newAnecdote.id,
				votes: 0
			}
		})
	}
}

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

export default anecdoteReducer

import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";

const reducer = combineReducers({
	notification: notificationReducer,
	anecdote: anecdoteReducer
})

const store = createStore(reducer, composeWithDevTools())


export default store

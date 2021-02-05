import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import redeucer from '../reducer'

const initialState = {}

const conmposEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(redeucer, initialState, conmposEnhancer(applyMiddleware(thunk)))

export default store
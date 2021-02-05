import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer'

const initialState = {}
const LoggerMiddleware = createLogger()

const conmposEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, initialState, conmposEnhancer(applyMiddleware(thunk, LoggerMiddleware)))

export default store
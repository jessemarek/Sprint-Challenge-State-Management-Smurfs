import React from "react"
import ReactDOM from "react-dom"

//Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

//Middleware
import thunk from 'redux-thunk'

//Reducers
import rootReducer from './store/reducers'

//Components
import App from "./components/App"

//Styles
import "./index.css"

const store = createStore(rootReducer, applyMiddleware(thunk))

//API base URL
export const baseURL = 'http://localhost:3333/smurfs'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById("root"))

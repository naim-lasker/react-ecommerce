import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import Routes from "./routes"

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App

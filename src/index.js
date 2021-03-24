import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import { store, persistor } from "./Redux/store"
// import store from "./Redux/store"

import { BrowserRouter } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
ReactDOM.render(
    <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </PersistGate>
    </React.StrictMode>,
    document.getElementById("root")
)

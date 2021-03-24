import { configureStore } from "@reduxjs/toolkit"
import { createStore, combineReducers } from "redux"
import filterReducer from "../Redux/filter/filter-reducer"
import { errorReducer, phonebookReducer, loaderReducer, loginisationReducer, tokenReducer, emailReducer } from "../Redux/phonebook/phonebook-reducer"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist"
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["token", "email"],
}

const contactsReducer = combineReducers({
    items: phonebookReducer,
    filter: filterReducer,
    loading: loaderReducer,
    isLoggedIn: loginisationReducer,
    token: tokenReducer,
    email: emailReducer,
    error: errorReducer,
})
const rootReducer = combineReducers({ contacts: persistReducer(persistConfig, contactsReducer) })

let store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
let persistor = persistStore(store)

export { store, persistor }

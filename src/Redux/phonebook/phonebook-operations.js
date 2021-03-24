import {
    submitContactRequest,
    submitContactSuccess,
    submitContactError,
    submitdDeleteItemRequest,
    submitDeleteItemSuccess,
    submitDeleteItemError,
    submitGetItemsRequest,
    submitGetItemsSuccess,
    submitGetItemsError,
    submitSignUpRequest,
    submitSignUpSuccess,
    submitSignUpError,
    submitLoginRequest,
    submitLoginSuccess,
    submitLoginsError,
    submitLogOutRequest,
    submitLogOutSuccess,
    submitLogOutsError,
    submitGetCurrentUserRequest,
    submitGetCurrentUserSuccess,
    submitGetCurrentUsesError,
} from "./phonebook-actions"
import axios from "axios"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com"

const userToken = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    clear() {
        axios.defaults.headers.common.Authorization = ""
    },
}
const addContact = (contact) => async (dispatch) => {
    dispatch(submitContactRequest())
    try {
        const { data } = await axios.post("contacts", contact)
        dispatch(submitContactSuccess(data))
    } catch (error) {
        dispatch(submitContactError())
    }
}

const getItems = () => async (dispatch) => {
    dispatch(submitGetItemsRequest())

    try {
        const { data } = await axios.get("contacts")
        dispatch(submitGetItemsSuccess(data))
    } catch (error) {
        dispatch(submitGetItemsError())
    }
}

const deleteContact = (id) => async (dispatch) => {
    dispatch(submitdDeleteItemRequest())
    try {
        await axios.delete(`contacts/${id}`)
        dispatch(submitDeleteItemSuccess(id))
    } catch (error) {
        dispatch(submitDeleteItemError())
    }
}

const register = (info) => async (dispatch) => {
    dispatch(submitSignUpRequest())
    try {
        const data = await axios.post("/users/signup", info)
        // console.log(data.data)
        dispatch(submitSignUpSuccess(data.data))
        userToken.set(data.data.token)
    } catch (error) {
        console.log(error)
        dispatch(submitSignUpError(error.message))
    }
}

const login = (userData) => async (dispatch) => {
    dispatch(submitLoginRequest())
    try {
        const { data } = await axios.post("/users/login", userData)
        dispatch(submitLoginSuccess(data))
        userToken.set(data.token)
    } catch (error) {
        dispatch(submitLoginsError(error.message))
    }
}
const logOut = () => async (dispatch) => {
    dispatch(submitLogOutRequest())
    try {
        await axios.post("/users/logout")
        dispatch(submitLogOutSuccess())
        userToken.clear()
    } catch (error) {
        dispatch(submitLogOutsError(error.message))
    }
}
const getCurrentUser = () => async (dispatch, getState) => {
    const {
        contacts: {
            token: { token },
        },
    } = getState()
    if (!token) {
        return
    }

    userToken.set(token)

    dispatch(submitGetCurrentUserRequest())
    try {
        await axios.get("/users/current")
        dispatch(submitGetCurrentUserSuccess())
    } catch (error) {
        dispatch(submitGetCurrentUsesError(error.message))
    }
}
export { addContact, deleteContact, getItems, register, login, logOut, getCurrentUser }

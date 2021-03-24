import { createReducer } from "@reduxjs/toolkit"
import {
    submit,
    deleteItem,
    submitContactRequest,
    submitContactSuccess,
    submitContactError,
    submitdDeleteItemRequest,
    submitDeleteItemSuccess,
    submitDeleteItemError,
    getContacts,
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

const phonebookReducer = createReducer([], {
    [submitContactSuccess]: (state, { payload }) => [...state, payload],
    [submitDeleteItemSuccess]: (state, { payload }) => state.filter((item) => item.id !== payload),
    [submitGetItemsSuccess]: (state, { payload }) => payload,
})

const loginisationReducer = createReducer(false, {
    [submitLoginSuccess]: () => true,
    [submitSignUpSuccess]: () => true,
    [submitLogOutSuccess]: () => false,
    [submitGetCurrentUserSuccess]: () => true,
    [submitGetCurrentUsesError]: () => false,
})

const tokenReducer = createReducer("", {
    [submitSignUpSuccess]: (state, { payload }) => payload.token,
    [submitLoginSuccess]: (state, { payload }) => payload,
    [submitLogOutSuccess]: () => "",
})

const emailReducer = createReducer("", {
    [submitLoginSuccess]: (state, { payload }) => payload.user.email,
    [submitSignUpSuccess]: (state, { payload }) => payload.user.email,
    [submitLogOutSuccess]: () => "",
})

const loaderReducer = createReducer(false, {
    [submitContactRequest]: () => true,
    [submitContactSuccess]: () => false,
    [submitContactError]: () => false,
    [submitdDeleteItemRequest]: () => true,
    [submitDeleteItemSuccess]: () => false,
    [submitDeleteItemError]: () => false,
    [getContacts]: () => true,
    [submitGetItemsRequest]: () => true,
    [submitGetItemsSuccess]: () => false,
    [submitGetItemsError]: () => false,
})

const errorReducer = createReducer("", {
    [submitLoginsError]: (state, { payload }) => payload,
    [submitDeleteItemError]: (state, { payload }) => payload,
    [submitGetItemsError]: (state, { payload }) => payload,
    [submitSignUpError]: (state, { payload }) => payload,
    [submitLogOutsError]: (state, { payload }) => payload,
    [submitGetCurrentUsesError]: (state, { payload }) => payload,
    [submitContactError]: (state, { payload }) => payload,
})
export { phonebookReducer, loaderReducer, loginisationReducer, tokenReducer, emailReducer, errorReducer }

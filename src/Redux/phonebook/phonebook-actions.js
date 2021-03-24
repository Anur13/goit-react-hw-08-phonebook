import { createAction } from "@reduxjs/toolkit"

const deleteItem = createAction("phonebook/delete")
const submit = createAction("phonebook/add")
const getContacts = createAction("phonebook/getItems")

const submitContactRequest = createAction("phonebook/submitContactRequest")
const submitContactSuccess = createAction("phonebook/submitContactSuccess")
const submitContactError = createAction("phonebook/submitContactError")

const submitdDeleteItemRequest = createAction("phonebook/DeleteItemRequest")
const submitDeleteItemSuccess = createAction("phonebook/DeleteItemSuccess")
const submitDeleteItemError = createAction("phonebook/DeleteItemError")

const submitGetItemsRequest = createAction("phonebook/GetItemsRequest")
const submitGetItemsSuccess = createAction("phonebook/GetItemsSuccess")
const submitGetItemsError = createAction("phonebook/GetItemsError")

const submitSignUpRequest = createAction("phonebook/SignUpRequest")
const submitSignUpSuccess = createAction("phonebook/SignUpSuccess")
const submitSignUpError = createAction("phonebook/SignUpError")

const submitLoginRequest = createAction("phonebook/LoginRequest")
const submitLoginSuccess = createAction("phonebook/LoginSuccess")
const submitLoginsError = createAction("phonebook/LoginError")

const submitLogOutRequest = createAction("phonebook/LogOutRequest")
const submitLogOutSuccess = createAction("phonebook/LogOutSuccess")
const submitLogOutsError = createAction("phonebook/LogOutError")

const submitGetCurrentUserRequest = createAction("phonebook/GetCurrentUseRequest")
const submitGetCurrentUserSuccess = createAction("phonebook/GetCurrentUseSuccess")
const submitGetCurrentUsesError = createAction("phonebook/GetCurrentUseError")

export {
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
}

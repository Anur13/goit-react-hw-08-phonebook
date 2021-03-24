import { createSelector } from "reselect"
import { useSelector } from "react-redux"
const getContactItem = (state) => state.contacts.items
const getContactsFilter = (state) => state.contacts.filter
const getLoading = (state) => state.contacts.filter

const getShownContacts = createSelector([getContactItem, getContactsFilter], (contacts, filter) => {
    return contacts.filter((item) => (item.name.toLowerCase().includes(filter) ? item : null))
})

export default { getLoading, getContactItem, getContactsFilter, getShownContacts }

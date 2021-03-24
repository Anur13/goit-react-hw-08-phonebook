import React, { useEffect } from "react"
import Contacts from "./Contacts"
import styles from "./Contacts.module.css"
import { connect, useSelector, useDispatch } from "react-redux"
import { getItems } from "../../Redux/phonebook/phonebook-operations"
import selectors from "../../Redux/phonebook/phonebook-selectors"

const ContactsList = ({}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, [])

    const visContacts = useSelector((state) => selectors.getShownContacts(state))
    return (
        <ul className={styles.list}>
            {visContacts.map((item) => {
                return <Contacts key={item.id} {...item} />
            })}
        </ul>
    )
}

export default ContactsList

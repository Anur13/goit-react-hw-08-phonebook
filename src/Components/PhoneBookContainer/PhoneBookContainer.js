import React from "react"
import ContactsList from "../Contacts/ContactsList"
import Filter from "../Filter/Filter"
import PhoneBook from "../PhoneBook/PhoneBook"
import styles from "./PhoneBookContainer.module.css"

const PhoneBookContainer = () => {
    return (
        <div className={styles.cont}>
            <PhoneBook />
            <div className={styles.dif}>
                <Filter />
                <ContactsList />
            </div>
        </div>
    )
}

export default PhoneBookContainer

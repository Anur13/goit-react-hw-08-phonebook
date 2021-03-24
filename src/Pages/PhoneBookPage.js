import React from "react"
import ContactsList from "../Components/Contacts/ContactsList"
import Filter from "../Components/Filter/Filter"
import PhoneBook from "../Components/PhoneBook/PhoneBook"

const PhoneBookPage = () => {
    return (
        <>
            <h1>PhoneBook</h1>
            <PhoneBook />

            <h2>Contacts</h2>
            <Filter />
            <ContactsList />
        </>
    )
}

export default PhoneBookPage

import styles from "./PhoneBook.module.css"
import React, { useState } from "react"

import { addContact } from "../../Redux/phonebook/phonebook-operations"

import { useSelector, useDispatch } from "react-redux"

const PhoneBook = () => {
    const [name, setName] = useState("")

    const [number, setNumber] = useState("")
    const dispatch = useDispatch()

    const handleNameChange = (event) => {
        const { value } = event.currentTarget

        setName(value)
    }
    const items = useSelector((state) => state.contacts.items)

    const handleNumberChange = (event) => {
        let { value } = event.currentTarget
        setNumber(value)
    }
    const handleSubmit = () => {
        const check = items.find((item) => item.name === name)
        if (check) {
            alert("Card with this name already exists")
            return
        }
        return dispatch(addContact({ name, number }))
    }
    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}
        >
            <label className={styles.label}>
                Name
                <input className={styles.input} onChange={handleNameChange} value={name} type="text" required />
            </label>
            <label className={styles.label}>
                Number
                <input
                    className={styles.input}
                    onChange={handleNumberChange}
                    value={number}
                    type="tel"
                    pattern="[0-9]{7}"
                    placeholder="533-33-23"
                    minLength="7"
                    maxLength="7"
                    required
                />
            </label>
            <button className={styles.submitButton} type="submit">
                Add contact
            </button>
        </form>
    )
}

export default PhoneBook

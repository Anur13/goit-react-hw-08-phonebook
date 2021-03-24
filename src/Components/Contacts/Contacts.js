import React from "react"
import PropTypes from "prop-types"
import { connect, useDispatch } from "react-redux"
import { deleteContact } from "../../Redux/phonebook/phonebook-operations"
import styles from "./Contacts.module.css"

const Contacts = ({ name, number, id }) => {
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(id))
    return (
        <li>
            <span className={styles.name}>
                {name}: {number}
            </span>

            <button type="button" onClick={handleDelete}>
                Delete
            </button>
        </li>
    )
}

Contacts.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Contacts

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { logOut } from "../../Redux/phonebook/phonebook-operations"
import styles from "./userBar.module.css"

const UserBar = () => {
    const email = useSelector((state) => state.contacts.email)
    const dispatch = useDispatch()
    return (
        <>
            <span>Welcome {email},</span>
            <button className={styles.logout} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </>
    )
}

export default UserBar

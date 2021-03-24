import React from "react"
import { Link } from "react-router-dom"
import styles from "./AuthBar.module.css"

const AuthBar = () => {
    return (
        <div className={styles.cont}>
            <Link to="/login"> Login</Link>
            <Link className={styles.register} to="/register">
                Register
            </Link>
        </div>
    )
}

export default AuthBar

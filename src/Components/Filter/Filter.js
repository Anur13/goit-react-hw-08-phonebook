import React from "react"
import styles from "./Filter.module.css"
import { connect, useDispatch } from "react-redux"
import filter from "../../Redux/filter/filter-actions"

const Filter = ({}) => {
    const dispatch = useDispatch()
    return (
        <>
            <label className={styles.label}>
                Find contacts by name
                <input className={styles.input} onChange={(e) => dispatch(filter(e.currentTarget.value))} type="text" />
            </label>
        </>
    )
}

export default Filter

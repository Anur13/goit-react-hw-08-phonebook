import React from "react"
import { useSelector } from "react-redux"
import AuthBar from "./AuthBar"
import UserBar from "./UserBar"

const AppBar = () => {
    const logged = useSelector((state) => state.contacts.isLoggedIn)
    return <>{logged ? <UserBar /> : <AuthBar />}</>
}

export default AppBar

import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ redirect, path, component: Component }) => {
    const logged = useSelector((state) => state.contacts.isLoggedIn)

    return <Route render={(props) => (logged ? <Component {...props} /> : <Redirect to={redirect} />)} />
}

export default PublicRoute

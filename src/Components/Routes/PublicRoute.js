import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ path, restricted, component: Component, redirect }) => {
    const logged = useSelector((state) => state.contacts.isLoggedIn)
    return <Route render={(props) => (logged && restricted ? <Redirect to={redirect} /> : <Component {...props} />)} />
}

export default PublicRoute

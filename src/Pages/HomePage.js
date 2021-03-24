import React from "react"
import { Redirect } from "react-router"
import routes from "../routes"

const HomePage = () => {
    return <Redirect to={routes.loginPage}></Redirect>
}

export default HomePage

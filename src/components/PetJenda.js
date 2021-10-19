import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./PetJenda.css"


export const PetJenda = () => (

    <div className="home">
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("petjenda_user")) {
          return (
            <>
              
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
  </div>
)
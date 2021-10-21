import React, {useState} from "react"
import { Route } from "react-router-dom"
import { PetCard } from "./Pets/PetCard"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { TaskList } from "./Tasks/TaskList"

import { Redirect } from "react-router"
import { PetForm } from "./Pets/PetForm"
import { PetList } from "./Pets/PetList"

export const ApplicationViews = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("petjenda_user") !== null)


    const setAuthUser = (user) => {
        sessionStorage.setItem("petjenda_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("petjenda_user") !== null)
      }

      return (
        <>
        <div className="dashboard">

          <Route exact path="/">
              
              <PetList />

          </Route>
          



          <Route exact path="/tasks/:petId">
            {/* Render the component for the user's tasks */}
            {isAuthenticated ? <TaskList /> : <Redirect to="/login" />}
         </Route>
            
          <Route exact path="/pets/create">
              <PetForm />
          </Route>

          <Route path="/login">
            <Login setAuthUser={setAuthUser} />
          </Route>
    
          <Route path="/register">
            <Register setAuthUser={setAuthUser} />
          </Route>
          </div>
        </>
      
      )
}
import React, {useState} from "react"
import { Route } from "react-router-dom"
import { PetCard } from "./Pets/PetCard"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { TaskList } from "./Tasks/TaskList"
import { Redirect } from "react-router"
import { PetForm } from "./Pets/PetForm"
import { PetList } from "./Pets/PetList"
import { UserList } from "./users/UserList"
import { MessageList } from "./messages/MessageList"
import { MessageForm } from "./messages/MessageForm"
import { useHistory } from "react-router"
import "./nav/NavBar.css"

export const ApplicationViews = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("petjenda_user") !== null)
    
    const clearUser = () => {
      sessionStorage.clear();
      
  }
  
    const history = useHistory()

    const handleLogout = () => {
      history.push('/login');
      clearUser();
  }

    const setAuthUser = (user) => {
        sessionStorage.setItem("petjenda_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("petjenda_user") !== null)
      }

      return (
        <>
        <div className="dashboard">

          <Route exact path="/">
            <div>
              <li className="logout-button" >
                <button className="logout-link" onClick={handleLogout} to="/login">Logout</button> 
              </li>
            </div>
         
              <PetList />
             

          </Route>
          

          <Route path="/messages/create">
            <MessageForm />
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
import React from "react"
import { UserList } from "../users/UserList"
import "./NavBar.css"
import logo from "../../images/logo.png"
import { useHistory } from "react-router"
import { MessageList } from "../messages/MessageList"


export const NavBar = () => {



  return (
    <>
    <div className="navbar-1">
    
    <div>
        <img src={logo} alt="petjenda-logo" className="app-logo" />
    </div>
    <div> 
      <h3 className="ms-b"> Message Board </h3>
    <MessageList />
             
    </div> 
    <div>
    <UserList /> 
    </div>
    </div>

  

   </>
  )
}

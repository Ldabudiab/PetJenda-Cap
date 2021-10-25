import React from "react";
import { getAllUsers } from "../../modules/UserManager";
import { UserCard } from "./UserCard";
import { useEffect, useState } from "react";
import "./UserList.css"

export const UserList = () => {
    

    const [searchTerms, setSearchTerms] =useState("");

    const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))

    const [users, setUsers] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);
  
    const getUsers = () => {

        return getAllUsers().then(usersFromAPI => {
            setUsers(usersFromAPI)
        })
    };

    useEffect(() => {
        getUsers()
    },[]);

    useEffect(() => {
          
        if (searchTerms !== "")  {
        
            const matchingUsers = users.filter(user => user.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFilteredUsers(matchingUsers)
        }
        else {
            setFilteredUsers(users)
        }
},[searchTerms, users]
);

    return (
        <>  
            
        

            <div className="user-container-cards">
            <div className="users-">   
            <h6>Users</h6>
            </div>
            <div className="userlist">
                {filteredUsers.map(user => 
                {if (currentUser === user.id){ 
                       return ""
                    }else {
                        return  <UserCard
                        key={user.name}
                         user = {user}
                         
                    />
                    }
                }
               )}
                </div>
            </div>

      
        </>
    ) 
};
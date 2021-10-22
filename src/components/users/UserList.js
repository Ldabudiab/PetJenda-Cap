import React from "react";
import { getAllUsers } from "../../modules/UserManager";
import { UserCard } from "./UserCard";
import { useEffect, useState } from "react";


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
            <div className="usersearch">   
            <label for="usersearch">Find a User</label>
                 <input id="usersearch" type= "text" className="userSearch"
                 value={searchTerms}
                 onChange={(e) => setSearchTerms(e.target.value)}
            /></div>
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
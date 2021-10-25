import { useHistory } from "react";
import React from "react";



export const UserCard = ({user}) => {


return(
    <section className="userCard">
        <h5 className="username">{user.name}</h5>
    </section>
)


}

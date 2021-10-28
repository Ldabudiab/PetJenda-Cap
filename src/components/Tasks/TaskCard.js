import React from "react"
import { useHistory } from "react-router"
import { taskComplete } from "../../modules/TaskManager"

import "./Task.css"

export const TaskCard = ({ task, reload, handleDeleteTask, pet}) => {
    const history = useHistory();

    const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))

    const checkChange = (event) => {

        taskComplete(task).then(reload)
    }
    
    console.log(pet.id)

    if (task.petId === pet.id){

    return (

        
        <div>
            <div className="card-info"> 
                <h3>{(task.name)}</h3>
                <p>{(task.time)}</p>
                <div className="complete"><label htmlFor="complete"> complete
                <input onChange={checkChange} type="checkbox" className="complete" id="complete"></input>
                </label> </div> 
                {task.userId === currentUser && <div className="buttons">
                <button className="button-delete" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>}
                
            </div> 
        </div>
    );
} else{

    return null
}
}

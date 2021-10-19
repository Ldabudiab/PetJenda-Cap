import React from "react"
import { useHistory } from "react-router"
import { taskComplete } from "../../modules/TaskManager"

import "./Task.css"

export const TaskCard = ({ task, reload, handleDeleteTask}) => {
    const history = useHistory();

    const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))

    const checkChange = (event) => {

        taskComplete(task).then(reload)
    }
    
    return (

        <div className="card">
            <div className="card-info"> 
                <h3>{(task.name)}</h3>
                {task.userId === currentUser && <div className="complete"><label for="complete">complete
                <input onChange={checkChange} type="checkbox" className="complete" id="complete"></input>
                </label> </div> }
                {task.userId === currentUser && <div className="buttons">
                <button className="button-7" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>}
                
            </div> 
        </div>
    );
}
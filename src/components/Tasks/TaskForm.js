import React, { useState} from "react";
import { useHistory } from "react-router";
import {  addTask } from '../../modules/TaskManager'

export const TaskForm = ({toggle, reload, pet}) => {
    const [task, setTask] = useState({
        name: "",
        time: "",
        petId: parseInt(pet),
        status: false
        
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTask = { ...task }
        const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))
        let selectedVal = event.target.value
        if (event.target.id.includes(" ")) {
            selectedVal = parseInt(selectedVal)
        }
        newTask[event.target.id] = selectedVal
        newTask.userId = currentUser
        setTask(newTask)
    }

    const handleClickSaveTask = (event) => {
		event.preventDefault()
            addTask(task)
                .then(toggle)
                .then(reload)
    }
     
    return (
		<form className="taskForm">
			<h2 className="taskForm__title">New Task</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Task Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task Name" value={task.name} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="time">Time Frame:</label>
					<input type="text" id="time" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="10am - 11am" value={task.time} />
				</div>
			</fieldset>
			<button className="btn btn-primary" onClick={handleClickSaveTask}>Save Task
          </button>
		</form>
	)
};
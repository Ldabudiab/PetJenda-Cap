import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask, getTaskByPetId } from "../../modules/TaskManager";
import { TaskCard } from "./TaskCard";
import { useHistory, useParams } from "react-router";
import "./Task.css"

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const [incompleteTasks, setIncompleteTasks] = useState([]);

    const {petId} = useParams();


    const history = useHistory();

    const getTasks = (petId) => {
        return getTaskByPetId(petId).then(tasksFromAPI => {
            setTasks(tasksFromAPI);
        });
    };

    const reload = () => {
        getTasks()
    }

    
    const handleDeleteTask = (id) => {
        console.log(id)
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    };
    
    
    useEffect(() => {
        
        getTasks(petId);
    }, []);

    useEffect(() => {
        console.log(tasks)
        const incompleteTaskschecker = tasks.filter(t => t.status === false)
        setIncompleteTasks(incompleteTaskschecker) 
    }, [tasks]);

    return (


		<>
          <div className="back-button">
            <button
            className="back-button"
            onClick={() => {history.push("/")}}>
				Home
            </button>
        </div>
        <div className="card-holder">
            <div className="cardHolderHeader">
			<button type="button"
				className="button-7"
				onClick={() => {history.push("/tasks/create")}}>
				Add Task
			</button>
            </div>
		<div className="container-cards">
			{incompleteTasks.map(task =>
				<TaskCard reload={reload} key={task.id} task={task} pet={task.pet} handleDeleteTask={handleDeleteTask} />)}

		</div>
        </div>
      
		</>
	);
};
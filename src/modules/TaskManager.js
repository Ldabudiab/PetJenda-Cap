const remoteURL = "http://localhost:8088/tasks"

export const getTaskById = (taskId) => {
    return fetch(`${remoteURL}/${taskId}`)
    .then(res => res.json())
}

export const getAllTasks = () => {
	return fetch(`${remoteURL}?_expand=pet`)
		.then(res => res.json())
}

export const deleteTask = (id) => {
	return fetch(`${remoteURL}/${id}`, {
		method: "DELETE"
	}).then(result => result.json())
}

export const addTask = (newTask) => {
	return fetch(`${remoteURL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newTask)
	}).then(response => response.json())
}

export const taskComplete = (completeTask) => {
	completeTask.status = true
	  return fetch(`${remoteURL}/${completeTask.id}`, {
		  method: "PATCH",
		  headers: {
			  "Content-Type": "application/json"
		  },
		  body: JSON.stringify(completeTask)
	  }).then(data => data.json());
  }


export const update = (editedTask) => {
	return fetch(`${remoteURL}/${editedTask.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedTask)
	}).then(data => data.json());
}

export const getTaskByPetId = (petId) => {

	return fetch (`${remoteURL}?petId=${petId}&_expand=pet`)
	.then(response => response.json())


}
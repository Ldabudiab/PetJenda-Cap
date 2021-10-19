// import React, { useState, useEffect } from "react"
// import { getTaskById, update } from "../../modules/TaskManager"
// import { useHistory, useParams } from "react-router"

// export const TaskEditForm = () => {
//     const [task, setTask] = useState({ name: "", date: "" });
//     const [isLoading, setIsLoading] = useState(false);

//     const {taskId} = useParams();
//     const history = useHistory();

//     const handleFieldChange = event => {
//     const stateToChange = { ...task };
//     stateToChange[event.target.id] = event.target.value;
//     setTask(stateToChange);
//   };

//     const updateExistingTask = event => {
//     event.preventDefault()
//     setIsLoading(true);

//     const editedTask = {
//       id: taskId,
//       name: task.name,
// 	    date: task.date,
//       status: false,
//       userId: parseInt(sessionStorage.getItem("petjenda_user"))
//     };

//     update(editedTask)
//     .then(() => history.push("/tasks")
//     )
//   }
//     useEffect(() => {
//     getTaskById(taskId)
//       .then(task => {
//         setTask(task);
//         setIsLoading(false);
//       });
//   }, [taskId]);

//   return (
//     <>
//       <form>
//         <fieldset>
//           <div className="formgrid">
//             <input
//               type="text"
//               required
//               className="form-control"
//               onChange={handleFieldChange}
//               id="name"
//               value={task.name}
//             />
//             <label htmlFor="name">Task name</label>

//             <input
//               type="date"
//               required
//               className="form-control"
//               onChange={handleFieldChange}
//               id="date"
//               value={task.date}
//             />
//             <label htmlFor="date">Date</label>
//           </div>
//           <div className="alignRight">
//             <button
//               type="button" disabled={isLoading}
//               onClick={updateExistingTask}
//               className="btn btn-primary"
//             >Submit</button>
//           </div>
//         </fieldset>
//       </form>
//     </>
//   );
// }



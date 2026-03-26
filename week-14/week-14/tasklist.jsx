function TaskList({ tasks, handleDeleteTask, handleEditTask }) {
 return (
 <div>
 <h1 className="display-6 text-center text-info mt-5">List of Tasks</h1>
 <table className="table text-center">
 <thead>
 <tr>
 <th>ID</th>
 <th>Taskname</th>
 <th>Duration(in hrs)</th>
 <th>Deadline</th>
 <th colSpan="2">Actions</th>
 </tr>
 </thead>
 <tbody>
 {tasks.map((taskObj) => (
 <tr key={taskObj.id}>
 <td>{taskObj.id}</td>
 <td>{taskObj.taskname}</td>
 <td>{taskObj.hours}</td>
 <td>{taskObj.dd}</td>
 <td>
 <button
 className="btn btn-danger"
 onClick={() => handleDeleteTask(taskObj.id)}
 >
 X

 </button>
 </td>
 <td>
 <button
 className="btn btn-warning"
 onClick={() => handleEditTask(taskObj)}
 >
 Edit
 </button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 );
}
export default TaskList;
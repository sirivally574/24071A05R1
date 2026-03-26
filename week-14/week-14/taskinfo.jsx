import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

import TasksCount from "./TasksCount";
function TaskInfo() {
 let { register, handleSubmit, setValue, reset } = useForm();
 let [c, setc] = useState([]);
 let [tasks, setTasks] = useState([]);
 let [error, setError] = useState("");
 let [show, setShow] = useState(false);
 const handleShow = () => setShow(true);
 const handleClose = () => setShow(false);
 const handleCreateTask = async (newTask) => {
 try {
 let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(newTask),
 });
 if (res.status === 201) {
 const taskWithId = { ...newTask, id: Date.now() };
 setTasks([...tasks, taskWithId]);
 setError("");
 }
 } catch (err) {
 setError(err.message);
 }
 };
 const handleDelTask = async (id) => {
 try {
 await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
 method: "DELETE",
 });
 const updatedTasks = tasks.filter((task) => task.id !== id);
 setTasks(updatedTasks);
 } catch (err) {
 setError("Failed to delete");
 }
 };
 const handleEditTask = (TaskObjToEdit) => {
 handleShow();
 setValue("id", TaskObjToEdit.id);
 setValue("taskname", TaskObjToEdit.taskname);
 setValue("hours", TaskObjToEdit.hours);
 setValue("dd", TaskObjToEdit.dd);
 };
 const saveModifiedTask = async (modifiedTaskObj) => {
 try {
 handleClose();
 await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
 method: "PUT",

 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(modifiedTaskObj),
 });
 const updatedTasks = tasks.map((task) =>
 task.id === modifiedTaskObj.id ? modifiedTaskObj : task
 );
 setTasks(updatedTasks);
 } catch (err) {
 setError("Failed to update");
 }
 };
 const handleReadTasks = async () => {
 setTasks([]);
 };
 useEffect(() => {
 handleReadTasks();
 }, []);
 return (
 <div className="row">
 <div className="col-md-6">
 {error.length !== 0 && (
 <p className="text-danger fs-2 text-center">{error}</p>
 )}
 <AddTaskForm handleCreateTask={handleCreateTask} />
 </div>
 <div className="col-md-6">
 <TasksCount count={tasks.length} />
 <TaskList
 tasks={tasks}
 handleDeleteTask={handleDelTask}
 handleEditTask={handleEditTask}
 />
 </div>
 <Modal show={show} onHide={handleClose}>
 <Modal.Header closeButton>
 <Modal.Title>Edit task</Modal.Title>
 </Modal.Header>
 <Modal.Body>
 <form onSubmit={handleSubmit(saveModifiedTask)}>
 <input
 disabled
 type="text"
 {...register("id")}
 className="form-control mb-3"
 />
 <input
 type="text"
 {...register("taskname")}

 placeholder="Task name"
 className="form-control mb-3"
 />
 <input
 type="number"
 {...register("hours")}
 className="form-control mb-3"
 />
 <input
 type="date"
 {...register("dd")}
 className="form-control mb-3"
 />
 <button className="btn btn-success" type="submit">
 Save
 </button>
 </form>
 </Modal.Body>
 </Modal>
 </div>
 );
}
export default TaskInfo;

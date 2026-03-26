import { useForm } from "react-hook-form";
function AddTaskForm({ handleCreateTask }) {
 const {
 register,
 handleSubmit,
 formState: { errors },
 reset,
 } = useForm();
 const onSubmit = (data) => {
 handleCreateTask(data);
 reset();
 };
 return (
 <div>
 <p className="fs-1 text-center text-info mt-5">Create a new Task</p>
 <form className="p-4 bg-light" onSubmit={handleSubmit(onSubmit)}>

 <input
 type="text"
 {...register("taskname", {
 required: "Task name is required",
 minLength: {
 value: 3,
 message: "Task name must be at least 3 characters",
 },
 })}
 placeholder="Task name"
 className="form-control mb-3"
 />
 {errors.taskname && (
 <p className="text-danger">{errors.taskname.message}</p>
 )}
 <input
 type="number"
 step="0.5"
 className="form-control mb-3"
 {...register("hours", {
 required: "Hours are required",
 valueAsNumber: true,
 min: { value: 0, message: "Hours cannot be negative" },
 max: { value: 100, message: "Hours cannot exceed 100" },
 })}
 />
 {errors.hours && <p className="text-danger">{errors.hours.message}</p>}
 <input
 type="date"
 {...register("dd", {
 required: "Deadline is required",
 })}
 className="form-control mb-1"
 />
 {errors.dd && <p className="text-danger">{errors.dd.message}</p>}
 <button type="submit" className="btn btn-primary mt-2">
 Add Task
 </button>
 </form>
 </div>
 );
}
export default AddTaskForm;
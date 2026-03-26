import { useState } from "react";
import TaskInfo from "./components/TaskInfo";
import AddTaskForm from "./components/AddTaskForm";
function App() {
 const [count, setCount] = useState(0);
 return (
 <div className="container">
 <TaskInfo />
 </div>
 );
}
export default App;

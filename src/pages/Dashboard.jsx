import { useLocalStorage, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Dashboard() {

  const [tasks, setTasks] = useLocalStorage("taskflow_data", []);


  useEffect(() => {
    localStorage.setItem("taskflow_data", JSON.stringify(tasks));
  }, [tasks]);

  const onAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>TaskFlow</h1>

      <TaskForm onAddTask={onAddTask} />

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Dashboard;
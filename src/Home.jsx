import {  useState } from "react";
import Task from "./TaskItem";
import { Link } from "react-router-dom";
import { useAddTaskMutation, useGetTasksQuery ,useUpdateTaskMutation,useDeleteTaskMutation} from "./ApiSlice";

export default function Home() {

  const [newTask, setNewTask] = useState("");
  

  const BASE_URL = "http://localhost:3000";
 const{ data: tasksList,isError,isLoading,error}= useGetTasksQuery();

 
 const [ addTask]=useAddTaskMutation(); 
 const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

 

  return (
    <div className="app-container">
      <div className="task-app">
        {/* Header */}
        <div className="task-header">
          <svg

            className="header-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5"
            />
          </svg>
          <h4>My Tasks</h4>
        </div>

        {/* Add Task */}
        <form
          className="task-form"
          onSubmit={(e) => {
            e.preventDefault();
            addTask({ value: newTask, completed: false });
            setNewTask("");
          }}
        >
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
          />
          <button>Add</button>
        </form>

        {/* Tasks List */}
        <div className="tasks-container">
          {isLoading ? (
            <p className="center-text">Loading...</p>
          ) : isError ? (
            <p className="center-text">
              {error?.error || "Something went wrong"}
            </p>
          ) : (
            tasksList.map((task) => (
              <Task
                key={task.id}
                task={task}
                updateTask={updateTask}
                deleteTask={deleteTask}
              />
            ))
          )}
        </div>
      </div>

      <Link to="contact" className="contact-link">
        Contact
      </Link>
    </div>
  );
}

import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {

  const display = tasks.map((task) => {
    return (<Task key={task.id} id={task.id} text={task.text} category={task.category}
      onDeleteTask={onDeleteTask} />)
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {display}
    </div>
  );
}

export default TaskList;

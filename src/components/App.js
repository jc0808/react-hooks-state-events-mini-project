import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const newTasks = TASKS.map(task => {
    const newList = {
      id: uuid(),
      text: task.text,
      category: task.category
    };

    return newList
  })

  const [tasks, setTasks] = useState(newTasks);
  // const [filtered, setFiltered] = useState(tasks);
  const [selectedCategory, setCategory] = useState("All");


  function removeTask(task) {
    setTasks(task);
  }

  const filteredTasks = tasks.filter(task => {
    for (let i = 0; i < CATEGORIES.length; i++) {
      if (selectedCategory === "All") {
        return task;
      } else {
        return task.category === selectedCategory;
      }
    }
    return true;
  })

  function handleDeleteTask(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  function onTaskFormSubmit(data) {
    if (!data.text === "" && !data.category === ""
      || !data.text === "" || !data.category === "") {
      return false;
    } else {
      setTasks([...tasks, data]);
    }

  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory}
        onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} removeTask={removeTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Code");

  function handleCategory(event) {
    setCategory(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleForm(event) {
    event.preventDefault();
    onTaskFormSubmit({
      id: uuid(),
      text: name,
      category: category,
    })

    // event.target['text'].value = '';
    // event.target['category'].value = '';
  }
  const renderCategories = categories.map(category => {
    if (category !== 'All') {
      return (<option key={category}>{category}</option>)
    }

    return true;
  })

  return (
    <form className="new-task-form" onSubmit={handleForm}>
      <label>
        Details
        <input type="text" name="text" onChange={handleName} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {/* render <option> elements for each category here */}
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

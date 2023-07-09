import React, { useState } from 'react';
import './output.css';
// useState hook is used to keep track of the llist of takss and the text in the input field.
function ToDoList() {
  const [tasks, setTasks] = useState([
    { text: 'Task 1', completed: false },
    { text: 'Task 2', completed: false },
    { text: 'Task 3', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTaskText(event.target.value);
  };
  // When the form is submitted, the handleNewTaskSubmit function is called, which adds a new task to the list of tasks with the text from the input field and a completed property of false.
  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { text: newTaskText, completed: false }]);
    setNewTaskText('');
  };
  // this is called when the index of teh clicked task is passed as an argument.
  // this function makes a new array with the clicked tasks completed property toggled.
  const handleTaskClick = (index) => {
    setTasks([
      ...tasks.slice(0, index),
      { ...tasks[index], completed: !tasks[index].completed },
      ...tasks.slice(index + 1),
    ]);
  };


  // When the remove button is clicked, the handleTaskRemove function is called with the index of the task to remove. This function creates a new array of tasks with the clicked task removed.
  const handleTaskRemove = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };
  return (
    <div>
      <h1 class="header text-center font-bold text-3xl font-sans text-emerald-700 my-3">Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          // The key prop is used by React to keep track of the list items.
          <li class="list text-center text-xl font-sans text-slate-800 my-3"
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleTaskClick(index)}
          >
            {task.text}
            <button class="btn ml-4 bg-slate-500 px-3 py-1 rounded-full text-white my-1" onClick={() => handleTaskRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleNewTaskSubmit}>
        <input class='mb-2 mx-auto outline-2 stroke-yellow-300' type="text" value={newTaskText} onChange={handleNewTaskChange} />
        <button class=' mx-auto btn rounded-md bg-orange-500 p-2 text-white' type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default ToDoList;



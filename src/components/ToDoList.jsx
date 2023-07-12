import React, { useState } from 'react';
import './output.css';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/fa/check';

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

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { text: newTaskText, completed: false }]);
    setNewTaskText('');
  };

  const handleTaskRemove = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleTaskClick = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <h1 class="header text-center text-5xl font-sans mb-3 text-emerald-700 my-3">#TO-DO</h1>
      <ul>
        {tasks.map((task, index) => (
          <li class="list text-center text-xl font-sans text-slate-800 my-3"
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleTaskClick(index)}
          >
            <Icon icon={check} size={20} style={{ color: task.completed ? 'green' : 'gray', marginRight: '10px' }} />
            {task.text}
            <button class="btn ml-4 bg-slate-500 px-3 py-1 rounded-full text-white my-1" onClick={() => handleTaskRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={handleNewTaskSubmit}>
        <input class='mb-2 mx-auto outline-2 stroke-yellow-300' type="text" value={newTaskText} onChange={handleNewTaskChange} />
        <button class='font-sans font-medium mx-auto btn rounded-md bg-orange-500 p-2 text-white' type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default ToDoList;

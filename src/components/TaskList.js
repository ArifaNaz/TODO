// src/components/TaskList.js
import React, { useState } from 'react';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
        ))}
      </ul>
      <div className="flex mt-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white" onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskList;

// src/components/TodoApp.js
import React from 'react';
import TaskList from './TaskList';

const TodoApp = () => {
  return (
    <div className="container mx-auto my-8 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <TaskList />
    </div>
  );
};

export default TodoApp;

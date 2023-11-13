// src/components/Task.js
import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between border p-2 my-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-1"
          />
          <button className="mx-2 px-2" onClick={handleEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button className="mx-2 px-2" onClick={() => setIsEditing(!isEditing)}>
              Edit
            </button>
            <button className="mx-2 px-2 text-red-500" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Task;

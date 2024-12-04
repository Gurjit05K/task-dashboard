import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title && dueDate) {
      dispatch(
        addTask({
          id: Date.now(),
          title,
          description,
          dueDate,
          completed: false,
        })
      );
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <form className="add-task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
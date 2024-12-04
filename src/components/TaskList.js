import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate}</p>
            <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          </div>
          <div className="task-actions">
            <button onClick={() => dispatch(toggleCompleted(task.id))}>
              {task.completed ? 'Mark Pending' : 'Mark Completed'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
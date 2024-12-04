import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;

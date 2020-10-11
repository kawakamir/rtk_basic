import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    idCount: 3,
    tasks: [
      { id: 1, title: "task a", completed: false },
      { id: 2, title: "task b", completed: true },
      { id: 3, title: "task c", completed: false },
    ],
  },
  reducers: {
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    delteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, delteTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;

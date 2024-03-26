import { createSlice } from "@reduxjs/toolkit";

function currentDate() {
  const date = new Date();
  const dd = date.getDay();
  const mm = date.getMonth();
  const yr = date.getFullYear();
  const current = `${dd}/${mm}/${yr}`;
  return current;
}

const todos = [
  {
    id: 0,
    name: "task 1",
    discription: "go to school",
    isComplite: false,
    currentDate: currentDate(),
    ExpectedDate: "12/06/2024",
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: todos,
  reducers: {
    add(state, action) {
      console.log(state);
      console.log(action.payload);
      const newTodo = action.payload;
      newTodo.id = state.length + 1;
      return [newTodo, ...state];
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    update(state, action) {
      const { id, updatedTodo, updateDate, toggle } = action.payload;
      const todoToUpdate = state.find((item) => item.id === id);

      if (todoToUpdate) {
        todoToUpdate.todo = updatedTodo;
        if (updateDate) {
          todoToUpdate.ExpectedDate = updateDate;
        }
        if (toggle) {
          todoToUpdate.isComplite = toggle;
        }
      }
    },
  },
});

export const { add, remove, update } = todoSlice.actions;
export default todoSlice.reducer;

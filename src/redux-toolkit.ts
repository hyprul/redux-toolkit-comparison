import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { stringify } from "querystring";
import { v1 as uuid } from "uuid";

import { Todo } from "./type";

const todosInitialState: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux-ToolKit",
    isComplete: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    edit: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        desc: string;
      }>
    ) => {
      const todoToEdit = state.find((todo) => todo.id === payload.id);
      if (todoToEdit) {
        todoToEdit.desc = payload.desc;
      }
    },
    toggle: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        isComplete: boolean;
      }>
    ) => {
      const todoToToggle = state.find((todo) => todo.id === payload.id);
      if (todoToToggle) {
        todoToToggle.isComplete = payload.isComplete;
      }
    },
    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

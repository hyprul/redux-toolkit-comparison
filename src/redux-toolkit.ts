import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
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
      action: PayloadAction<{
        id: string;
        desc: string;
      }>
    ) => {
        
    },
  },
});

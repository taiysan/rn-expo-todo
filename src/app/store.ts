import { configureStore } from "@reduxjs/toolkit";
import { TaskModel } from '@entities/task/models';

export const Store = configureStore({
  reducer: {
    tasks: TaskModel.reducer,
  },
});

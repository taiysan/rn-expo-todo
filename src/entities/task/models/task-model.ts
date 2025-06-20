import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Task } from '@shared/api';

export type TaskState = {
  entries: Record<number, Task>;
};

const initialState: TaskState = {
  entries: {},
};

export const TaskModel = createSlice({
  name: 'TaskModal',
  initialState,
  reducers: {
    add: (state, { payload: task }: PayloadAction<Task>) => {
      state.entries[task.id] = task;
    },
    toggle: ({ entries }, { payload: taskId }: PayloadAction<number>) => {
      entries[taskId].completed = !entries[taskId].completed;
    },
    reset: (state, { payload }: PayloadAction<Task[]>) => {
      state.entries = payload.reduce(
        (record, task: Task) => {
          record[task.id] = task;
          return record;
        },
        {} as Record<number, Task>
      );
    },
  },
});

import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from '@shared/hooks';
import { Task } from '@shared/api';
import { TaskModel } from '@entities/task/models/task-model';

export const useTask = (taskId: number): Task =>
  useSelector(
    createSelector(
      (state: RootState) => state.tasks.entries,
      (tasks) => tasks[taskId]
    )
  );

export const useTaskFilteredList = (completed?: boolean): Task[] =>
  useSelector(
    createSelector(
      (state: RootState) => state.tasks.entries,
      (tasks: Task[]) =>
        Object.values(tasks).filter(
          (task) =>
            completed === undefined || task?.completed === completed
        )
    )
  );

export const useTaskToggleHandler = (taskId: number): () => void => {
  const dispatch = useDispatch();
  return () => dispatch(TaskModel.actions.toggle(taskId));
}

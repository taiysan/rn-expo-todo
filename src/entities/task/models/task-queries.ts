import { useIsFetching, useQuery } from 'react-query';
import { Api, Task } from '@shared/api';
import { useDispatch } from '@shared/hooks';
import { TaskModel } from './task-model';

export const useQueryTaskListIsFetching = (): boolean => useIsFetching('tasks') > 0;
export const useQueryTaskList = () => {
  const dispatch = useDispatch();
  return useQuery<Task[]>('tasks', () => Api.tasks.getTasksList(), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatch(TaskModel.actions.reset(data.slice(0, 25)));
    },
  });
};

export const useQueryTask = (id: number) => {
  const dispatch = useDispatch();
  return useQuery<Task>('task', () => Api.tasks.getTaskById(id), {
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
    onSuccess: (data) => {
      if (data.id) {
        dispatch(TaskModel.actions.add(data));
      }
    },
  });
};

import { Config } from '@shared/config';

export type Task = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

const getTasksList = async (): Promise<Task[]> => {
  const res = await fetch(`${Config.baseURL}/todos`, {});
  return await res.json();
};

const getTaskById = async (id: number): Promise<Task> => {
  const res = await fetch(`${Config.baseURL}/todos/${id}`);
  return await res.json();
};

export const tasks = {
  getTasksList,
  getTaskById,
};

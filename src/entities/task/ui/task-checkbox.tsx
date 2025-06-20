import { Checkbox } from 'expo-checkbox';
import { useTask, useTaskToggleHandler } from '@entities/task/models';

export type Props = {
  id: number;
};

export const TaskCheckbox = (props: Props) => {
  const { id } = props;

  const task = useTask(id);
  const onValueChange = useTaskToggleHandler(id);

  return <Checkbox className="mx-2" onValueChange={onValueChange} value={task.completed} />
};

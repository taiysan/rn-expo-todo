import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { type Task } from '@shared/api';

type Props = PropsWithChildren<{
  data: Task;
}>;

export const TaskRow = (props: Props) => {
  const { data, children } = props;
  const { title, completed } = data;

  return (
    <View className="mx-4 my-2 h-12 flex-row items-center rounded-lg bg-zinc-50 shadow shadow-slate-300">
      {children}
      <Text
        numberOfLines={2}
        className={`flex-1 pr-2 text-base ${completed ? 'line-through' : 'no-underline'}`}>
        {title}
      </Text>
    </View>
  );
};

import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TasksListWidget } from '@widgets/task/ui';
import { TaskListFilterKey, TaskListFilter } from '@features/task/ui';

export const TaskListScreen = () => {
  const [filterKey, setFilterKey] = useState<TaskListFilterKey>('all');

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <TaskListFilter onFilterButtonPress={setFilterKey} />
      <TasksListWidget filterKey={filterKey} />
    </SafeAreaView>
  );
};

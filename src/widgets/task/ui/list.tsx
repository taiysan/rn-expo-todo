import { useMemo } from 'react';
import { FlatList, StyleSheet, type ListRenderItem } from 'react-native';
import { TaskListFilterKey } from '@features/task/ui';
import { useQueryTaskList, useTaskFilteredList } from '@entities/task/models';
import { TaskRow, TaskCheckbox } from '@entities/task/ui';
import { Empty, Loading } from '@shared/ui';
import { Task } from '@shared/api';

type Props = {
  filterKey: TaskListFilterKey | undefined;
};

export const TasksListWidget = (props: Props) => {
  const { filterKey } = props;
  const { isFetching } = useQueryTaskList();

  const data = useTaskFilteredList(filterKey === 'all' ? undefined : filterKey === 'closed');

  const keyExtractor = (item: Task) => item.id.toString();
  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <TaskRow data={item}>
      <TaskCheckbox id={item.id} />
    </TaskRow>
  );

  const ListEmptyComponent = useMemo(
    () => (isFetching ? <Loading /> : <Empty desc="No tasks found" />),
    [isFetching]
  );

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
});

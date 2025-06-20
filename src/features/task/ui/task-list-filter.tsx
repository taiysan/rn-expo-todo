import React, { useCallback, useReducer } from 'react';
import { View } from 'react-native';
import { RadioButton } from '@shared/ui';

const RESET_FILTERS = {
  all: false,
  open: false,
  closed: false,
};

export type TaskListFilterKey = keyof typeof RESET_FILTERS

export type Props = {
  onFilterButtonPress?: (key: TaskListFilterKey) => void;
};

export const TaskListFilter = (props: Props) => {
  const { onFilterButtonPress } = props;

  const [radioMap, updateRadioMap] = useReducer(
    (_, key: TaskListFilterKey) => ({
      ...RESET_FILTERS,
      ...{ [key]: true },
    }),
    { ...RESET_FILTERS, all: true }
  );

  const onValueChange = useCallback((key: TaskListFilterKey) => {
    updateRadioMap(key);
    onFilterButtonPress?.(key);
  }, [onFilterButtonPress]);

  return (
    <View className="border-b border-neutral-100 p-2">
      <View className="w-full flex-row justify-evenly">
        {Object.keys(radioMap).map((key) => (
          <RadioButton
            key={key}
            label={`${key}:`}
            selected={radioMap[key as TaskListFilterKey]}
            onValueChange={() => onValueChange(key as TaskListFilterKey)}
          />
        ))}
      </View>
    </View>
  );
};

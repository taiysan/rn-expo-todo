import { Text, View, TouchableOpacity } from 'react-native';

type Props = {
  selected: boolean;
  label: string;
  disabled?: boolean;
  onValueChange?: (selected: boolean) => void;
};

export const RadioButton = (props: Props) => {
  const { selected, label, disabled, onValueChange } = props;

  const labelClassName = disabled ? 'text-neutral-300' : '';
  const containerClassName = disabled ? 'border-neutral-300' : '';
  const contentClassName = disabled ? 'bg-neutral-300' : '';

  const onPress = () => {
    if (!disabled && onValueChange) {
      onValueChange(!selected);
    }
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View className="mr-2 flex-row items-center">
        {label && <Text className={`mr-2 capitalize ${labelClassName}`}>{label}</Text>}
        <View
          className={`h-6 w-6 items-center justify-center rounded-full border-2 ${containerClassName}`}>
          {selected && <View className={`h-3 w-3 rounded-full bg-black ${contentClassName}`} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

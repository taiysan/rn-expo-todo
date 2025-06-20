import { Text, View } from "react-native";

type Props = {
  desc: string;
};

export const Empty = (props: Props) => {
  const { desc } = props;

  return (
    <View className="h-full justify-center">
      <Text className="text-lg text-center">{desc}</Text>
    </View>
  );
};

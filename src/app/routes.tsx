import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskListScreen } from '@screens/task/ui';

const RootStack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="TaskList">
        <RootStack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

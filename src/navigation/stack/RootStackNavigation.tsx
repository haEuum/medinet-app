import AuthStackNavigation from "src/navigation/stack/AuthStackNavigation";
import { NavigationType } from "src/types/navigation/navigation.type";
import MainScreen from "src/screens/main/screen";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator<NavigationType>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="rootAuth"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen component={AuthStackNavigation} name="rootAuth" />
      <RootStack.Screen name="Main" component={MainScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;

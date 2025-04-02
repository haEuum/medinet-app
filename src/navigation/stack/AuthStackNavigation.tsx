import { createStackNavigator } from "@react-navigation/stack";
import Login from "src/screens/auth/login/screen";
import SignupNavigator from "src/navigation/SignupNavigator";

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignupNavigator} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;

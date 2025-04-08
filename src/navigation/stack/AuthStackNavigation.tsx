import { createStackNavigator } from "@react-navigation/stack";
import Login from "src/screens/auth/login/screen";
import SignUp from "src/screens/auth/signup/screen";
import Complete from 'src/screens/complete/screen';

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Complete" component={Complete} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;

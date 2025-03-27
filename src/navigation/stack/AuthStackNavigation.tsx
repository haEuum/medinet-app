import Login from "src/screens/auth/login/screen";
import SignUp from "src/screens/auth/signup/screen";
import {createStackNavigator} from "@react-navigation/stack";
import {LoginProps} from "src/types/screen/auth/authScreen.type";

const AuthStack = createStackNavigator<LoginProps>();

const AuthStackNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="SignUp" component={SignUp}/>
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigation;

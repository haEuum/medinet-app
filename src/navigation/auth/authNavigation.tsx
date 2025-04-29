import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from "src/screens/auth/login/screen";

type Props = {
    Login: undefined;
    SignUp: undefined;
};

const Stack = createNativeStackNavigator<Props>();

export default function AuthNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "src/screens/auth/login/screen";
import SignUp from "src/screens/auth/signUp/screen";
import {AuthProps} from "src/types/navigation/auth/auth.navigation";

const Stack = createNativeStackNavigator<AuthProps>();

export default function AuthNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}
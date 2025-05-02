import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from "src/navigation/auth/authNavigation";
import {RootStackParamList} from "src/types/navigation/root/root.navigation";
import Main from "src/screens/main/screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Auth">
                <Stack.Screen name="Auth" component={AuthNavigation}/>
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
    )
}

export default RootNavigator;
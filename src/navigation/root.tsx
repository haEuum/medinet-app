import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from "src/navigation/auth/authNavigation";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Auth" component={AuthNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
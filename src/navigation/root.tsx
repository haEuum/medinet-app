import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
            {/*  추후에 경로 삽입  */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
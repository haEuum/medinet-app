import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "src/navigation/RootNavigation.tsx";
import RootStackNavigation from "src/navigation/stack/RootStackNavigation.tsx";

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <RootStackNavigation />
        </NavigationContainer>
    )
}

export default AppNavigator;
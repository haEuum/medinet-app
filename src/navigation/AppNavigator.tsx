import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RootStackNavigation from "src/navigation/stack/RootStackNavigation";

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <RootStackNavigation />
        </NavigationContainer>
    )
}

export default AppNavigator;
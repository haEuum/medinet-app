import React from 'react';
import "src/styles/build";
import Provider from 'src/components/common/provider';
import RootNavigator from "src/navigation/root";
import {NavigationContainer} from "@react-navigation/native";
import {navigationRef} from "src/utils/navigate";

const App = () => {
    return (
        <Provider>
            <NavigationContainer ref={navigationRef}>

            <RootNavigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
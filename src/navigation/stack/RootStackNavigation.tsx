import AuthStackNavigation from "src/navigation/stack/AuthStackNavigation.tsx";
import {NavigationType} from "src/types/navigation/navigation.type";
import {createStackNavigator} from "@react-navigation/stack";

const RootStack = createStackNavigator<NavigationType>();

const RootStackNavigation = () => {
    return (
        <RootStack.Navigator initialRouteName="rootAuth" screenOptions={{headerShown: false}}>
            <RootStack.Screen component={AuthStackNavigation} name="rootAuth"/>
        </RootStack.Navigator>
    )
}

export default RootStackNavigation;
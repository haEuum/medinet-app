import {StackNavigationProp} from "@react-navigation/stack";
import {AuthStackParamList} from "src/types/navigation/navigation.type";

export type Login = { navigation: StackNavigationProp<AuthStackParamList, "Login"> };
export type SignUp = {
    navigate(arg0: string): void; navigation: StackNavigationProp<AuthStackParamList, "SignUp"> 
};
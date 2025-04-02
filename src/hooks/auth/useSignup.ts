import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { SignupStackParamList } from "src/types/signup/signup.type";

type Step1NavigationProp = StackNavigationProp<SignupStackParamList, "Step1">;

const useSignup = () => {
  const navigation = useNavigation<Step1NavigationProp>();
  const [name, setName] = useState("");

  const onChangeName = (text: string) => {
    setName(text);
  };

  const [password, setPassword] = useState("");

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const [phoneNum, setphoneNum] = useState("");

  const onChangephoneNum = (text: string) => {
    setphoneNum(text);
  };

  const [authenticationCode, setAuthenticationCode] = useState("");

  const onChangeAuthenticationCode = (text: string) => {
    setAuthenticationCode(text);
  };

  const [userClass, setUserClass] = useState("");

  const onChangeUserClass = (text: string) => {
    setUserClass(text);
  };

  const [field, setField] = useState("");

  const onChangeField = (text: string) => {
    setField(text);
  };

  return {
    name,
    password,
    phoneNum,
    authenticationCode,
    navigation,
    userClass,
    field,
    onChangeName,
    onChangePassword,
    onChangephoneNum,
    onChangeAuthenticationCode,
    onChangeUserClass,
    onChangeField,
  };
};

export default useSignup;

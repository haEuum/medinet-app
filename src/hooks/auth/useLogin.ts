import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types/navigation/navigation.type";
import { login } from "src/services/auth/login/login.service";
import { showToast } from "src/libs/toast/toast";
import Token from "src/libs/token";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from "src/constants/token/token.constants";

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

const useLogin = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const [loginData, setLoginData] = useState({
    phoneNum: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      if (!loginData.phoneNum)
        return showToast("error", "오류", "전화번호를 입력해주세요.");

      if (!loginData.password)
        return showToast("error", "오류", "비밀번호를 입력해주세요.");
      await login({
        phoneNumber: loginData.phoneNum,
        password: loginData.password
      });
      navigation.navigate("Main");
      await Token.setToken(ACCESS_TOKEN);
      await Token.setToken(REFRESH_TOKEN);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
      showToast("error", "오류", errorMessage);
    }
  };

  return { loginData, setLoginData, navigation, handleLogin };
};

export default useLogin;

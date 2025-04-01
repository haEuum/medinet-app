import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types/navigation/navigation.type";
import { login } from "src/services/auth/login/login.service";
import { showToast } from "src/components/toast/toast";
import Token from "src/libs/token/keychain";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token.constants";

type AuthNavigationProp = StackNavigationProp<AuthStackParamList>;

const useLogin = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      if (!loginData.phoneNumber)
        return showToast("error", "오류", "전화번호를 입력해주세요.");

      if (!loginData.password)
        return showToast("error", "오류", "비밀번호를 입력해주세요.");
      await login(loginData);
      navigation.navigate("Main");
      Token.setToken(ACCESS_TOKEN, false);
      Token.setToken(REFRESH_TOKEN, false);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
      showToast("error", "오류", errorMessage);
    }
  };

  return { loginData, setLoginData, navigation, handleLogin };
};

export default useLogin;

import { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { login } from "src/apis/auth/auth.api";
import Token from "src/libs/token";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token";
import { RootStackParamList } from "src/types/navigation/root/root.navigation";
import { showToast } from "src/libs/toast";
import type { Login } from "src/types/auth/login.type";

const useLogin = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [loginData, setLoginData] = useState<Login>({
        phoneNumber: "",
        password: "",
    });

    const handleLoginData = useCallback((key: keyof Login, value: string) => {
        setLoginData((prev) => ({ ...prev, [key]: value }));
    }, []);

    const submitLoginData = useCallback(async () => {
        const { phoneNumber, password } = loginData;

        if (!phoneNumber.trim()) {
            return showToast("info", "아이디를 입력해주세요.");
        }

        if (!password.trim()) {
            return showToast("info", "비밀번호를 입력해주세요.");
        }

        try {
            const response = await login(loginData);
            const { accessToken, refreshToken } = response.data;
            const { status } = response;

            if (status === 200 || status === 201) {
                await Token.setToken(ACCESS_TOKEN, accessToken);
                await Token.setToken(REFRESH_TOKEN, refreshToken);

                showToast("success", "로그인 성공");
                navigation.replace("Main");
            } else {
                showToast("error", `로그인 실패 (status: ${status})`);
            }
        } catch {
            showToast("error", "아이디 또는 비밀번호를 다시 확인해주세요.");
        }
    }, [loginData, navigation]);

    return { loginData, handleLoginData, submitLoginData };
};

export default useLogin;
import { AxiosError } from "axios";
import Token from "src/libs/token";
import { ACCESS_TOKEN } from "src/constants/token/token.constants";
import { Alert } from "react-native";
import {navigate} from "src/navigation/RootNavigation";

export const responseErrorInterceptor = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status },
        } = error;

        try {
            const usingAccessToken = await Token.getToken(ACCESS_TOKEN);

            if (status === 401) {
                if (!usingAccessToken) {
                    // 인증 정보가 없으면 로그인 페이지로 이동
                    Alert.alert("세션 만료", "다시 로그인해주세요.", [
                        { text: "확인", onPress: () => navigate("rootAuth") },
                    ]);

                    await Token.removeToken();
                    return;
                }
            } else if (status === 403) {
                // 권한 오류 처리
                Alert.alert("권한 오류", "접근 권한이 없습니다.");
            }
        } catch (err) {
            console.error("responseErrorInterceptor 오류:", err);
        }
    }

    return Promise.reject(error);
};
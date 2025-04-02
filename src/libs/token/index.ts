import * as SecureStore from "expo-secure-store";
import * as LocalAuthentication from "expo-local-authentication";
import {ACCESS_TOKEN} from "src/constants/token/token.constants";

const Token = {
    getToken: async (key: string=ACCESS_TOKEN): Promise<string | null> => {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: "토큰을 가져오려면 생체 인증을 사용하세요",
        });

        if (!result.success) {
            console.warn("생체 인증 실패");
            return null;
        }

        return await SecureStore.getItemAsync("accessToken");
    },

    setToken: async (value: string): Promise<void> => {
        await SecureStore.setItemAsync("accessToken", value);
    },

    removeToken: async (): Promise<void> => {
        await SecureStore.deleteItemAsync("accessToken");
        await SecureStore.deleteItemAsync("refreshToken");
    },
};

export default Token;
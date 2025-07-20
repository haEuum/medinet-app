import * as SecureStore from "expo-secure-store";
import * as LocalAuthentication from "expo-local-authentication";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token";

const Token = {
    getToken: async (key: typeof ACCESS_TOKEN | typeof REFRESH_TOKEN): Promise<string | null> => {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: "토큰을 가져오려면 생체 인증을 사용하세요",
        });

        if (!result.success) {
            console.warn("생체 인증 실패");
            return null;
        }

        return await SecureStore.getItemAsync(key);
    },

    setToken: async (key: typeof ACCESS_TOKEN | typeof REFRESH_TOKEN, value: string): Promise<void> => {
        await SecureStore.setItemAsync(key, value);
    },

    removeToken: async (): Promise<void> => {
        await SecureStore.deleteItemAsync(ACCESS_TOKEN);
        await SecureStore.deleteItemAsync(REFRESH_TOKEN);
    },
};

export default Token;
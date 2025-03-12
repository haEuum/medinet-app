import * as Keychain from "react-native-keychain";
import { REQUEST_TOKEN, ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token.constants";

const Token = {
    /**
     * @param {boolean} useBiometrics - 생체 인증 사용 여부 (기본값: false)
     */
    getToken: async (key: string, useBiometrics = false): Promise<string | null> => {
        try {
            const credentials = await Keychain.getGenericPassword({
                service: key,
                authenticationPrompt: useBiometrics ? "토큰을 가져오려면 생체 인증을 사용하세요" : undefined,
            });

            return credentials ? credentials.password : null;
        } catch (error) {
            console.error(`토큰 가져오기 실패 (${key}):`, error);
            return null;
        }
    },

    /**
     * @param {boolean} useBiometrics - 생체 인증 사용 여부 (기본값: false)
     */
    setToken: async (key: string, token: string, useBiometrics = false): Promise<void> => { //
        try {
            const options = {
                service: key,
                ...(useBiometrics && {
                    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
                    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
                    authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
                }),
            };

            await Keychain.setGenericPassword(key, token, options);
        } catch (error) {
            console.error(`토큰 저장 실패 (${key}):`, error);
        }
    },

    // 모든 토큰 삭제
    removeToken: async (): Promise<void> => {
        try {
            await Keychain.resetGenericPassword({ service: ACCESS_TOKEN });
            await Keychain.resetGenericPassword({ service: REFRESH_TOKEN });
        } catch (error) {
            console.error("토큰 삭제 실패:", error);
        }
    },
};

export default Token;
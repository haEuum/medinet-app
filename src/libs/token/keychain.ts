import * as Keychain from "react-native-keychain";

const Token = {
  getToken: async (
    token: string,
    useBiometrics = false
  ): Promise<string | null> => {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: token,
        authenticationPrompt: useBiometrics
          ? { title: "토큰을 가져오려면 생체 인증을 사용하세요" }
          : undefined,
      });
      if (
        credentials &&
        typeof credentials === "object" &&
        "password" in credentials
      )
        return credentials.password;

      return null;
    } catch (error) {
      console.error(`토큰 가져오기 실패 (${token}):`, error);
      return null;
    }
  },

  setToken: async (token: string, useBiometrics = false): Promise<void> => {
    try {
      const options = {
        service: token,
        ...(useBiometrics && {
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
          accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
          authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
        }),
      };
      await Keychain.setGenericPassword(token, token, options);
    } catch (error) {
      console.error(`토큰 저장 실패 (${token}):`, error);
    }
  },

  removeToken: async (): Promise<void> => {
    try {
      await Keychain.resetGenericPassword({ service: "accessToken" });
      await Keychain.resetGenericPassword({ service: "refreshToken" });
    } catch (error) {
      console.error("토큰 삭제 실패:", error);
    }
  },
};

export default Token;

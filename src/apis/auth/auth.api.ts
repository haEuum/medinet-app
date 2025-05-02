import axios from "axios";
import {
    Login,
    LoginResponse,
    NewAccessTokenResponse,
} from "src/types/auth/login.type";
import config from "src/config/config.json";

export const login = async (login: Login): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(
            `${config.SERVER_URL}/login`,
            login
        );
        return response.data;
    } catch (error: any) {
        throw new Error(
            error?.response?.data?.message || "로그인 요청에 실패했습니다."
        );
    }
};

export const refresh = async (
    refreshToken: { refreshToken: string | null }
): Promise<NewAccessTokenResponse> => {
    try {
        const response = await axios.post<NewAccessTokenResponse>(
            `${config.SERVER_URL}/reissue`,
            refreshToken
        );
        return response.data;
    } catch (error: any) {
        throw new Error("리프레쉬 에러");
    }
};
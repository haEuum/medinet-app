import axios from "axios";
import {LoginProps, LoginResponse, NewAccessToken} from "src/types/auth/login.type";
import {SERVER_URL} from "@env";

export const login = async (login: LoginProps): Promise<LoginResponse> => {
    try {
        const {data} = await axios.post<LoginResponse>(`${SERVER_URL}/login`, login);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패했습니다.");
    }
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    try {
        const {data} = await axios.post<NewAccessToken>(`${SERVER_URL}/reissue`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("refresh Error");
    }

};
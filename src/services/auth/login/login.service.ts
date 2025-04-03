import {MedinetAxios} from "src/libs/axios/customAxios";
import {LoginProps, LoginResponse, NewAccessToken} from "src/types/auth/login.type";

export const login = async (login: LoginProps): Promise<LoginResponse> => {
    try {
        const {data} = await MedinetAxios.post<LoginResponse>("/login", login);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패했습니다.");
    }
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    try {
        const {data} = await MedinetAxios.post<NewAccessToken>(`/reissue`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("refresh Error");
    }

};
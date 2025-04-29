import axios from "axios";
import {Login, LoginResponse} from "src/types/auth/login.type";
import {SERVER_URL} from "src/config/config.json";

export const login = async (login: Login): Promise<LoginResponse> => {
    try {
        const {data} = await axios.post<LoginResponse>(`${SERVER_URL}/login`, login);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패했습니다.");
    }
};

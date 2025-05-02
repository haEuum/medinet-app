import axios, { AxiosRequestConfig } from "axios";
import { requestInterceptor } from "./requestInterceptor";
import { responseErrorInterceptor } from "./responseErrorInterceptor";
import { REQUEST_TOKEN, ACCESS_TOKEN } from "src/constants/token/token";
import Token from "src/libs/token";
import config from "src/config/config.json"

const { SERVER_URL } = config;

const createCustomAxiosInstance = (baseURL?: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };

    return axios.create({
        ...baseConfig,
        ...baseURL,
        withCredentials: true,
    });
};

export const MedinetAxios = createCustomAxiosInstance({
    baseURL: SERVER_URL,
    headers: {
        [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`!,
    },
});

// 요청마다 토큰 갱신
MedinetAxios.interceptors.request.use(
    async (config) => {
        const token = await Token.getToken(ACCESS_TOKEN);
        config.headers = config.headers || {};
        if (token) {
            config.headers[REQUEST_TOKEN] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터
MedinetAxios.interceptors.response.use((res) => res, responseErrorInterceptor);

export default MedinetAxios;
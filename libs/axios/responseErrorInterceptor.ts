import axios, { AxiosError } from "axios";
import Token from "src/libs/token";
import { ACCESS_TOKEN, REFRESH_TOKEN, REQUEST_TOKEN } from "src/constants/token/token";
import { refresh } from "src/apis/auth/auth.api";
import { navigate } from "src/utils/navigate";

let isRefreshing = false;
let refreshQueue: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    refreshQueue.forEach((cb) => cb(token));
    refreshQueue = [];
};

export const responseErrorInterceptor = async (error: AxiosError) => {
    const originalRequest = error.config;

    // 타입 무시
    const request = originalRequest as any;

    if (error.response?.status === 401 && !request._retry) {
        const accessToken = await Token.getToken(ACCESS_TOKEN);
        const refreshToken = await Token.getToken(REFRESH_TOKEN);

        if (accessToken && refreshToken) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const { data } = await refresh({ refreshToken });
                    await Token.setToken(ACCESS_TOKEN, data.accessToken);
                    onRefreshed(data.accessToken);
                } catch {
                    await Token.removeToken();
                    navigate("Auth");
                } finally {
                    isRefreshing = false;
                }
            }

            return new Promise((resolve) => {
                refreshQueue.push((token: string) => {
                    if (request?.headers) {
                        request.headers[REQUEST_TOKEN] = `Bearer ${token}`;
                        request._retry = true;
                        resolve(axios(request));
                    }
                });
            });
        }
    }

    return Promise.reject(error);
};
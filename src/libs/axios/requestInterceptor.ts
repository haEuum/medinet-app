import { InternalAxiosRequestConfig } from "axios";
import Token from "../token";
import {ACCESS_TOKEN, REQUEST_TOKEN} from "src/constants/token/token.constants";
import {navigate} from "src/navigation/RootNavigation";

export const requestInterceptor = (
    config: InternalAxiosRequestConfig) : InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    if (Token.getToken(ACCESS_TOKEN) === null) {
        navigate("rootAuth")
    } else {
        config.headers[REQUEST_TOKEN] = `Bearer ${ACCESS_TOKEN}`;
    }

    return config;
}
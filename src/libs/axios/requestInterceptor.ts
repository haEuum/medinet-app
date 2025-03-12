import { InternalAxiosRequestConfig } from "axios";
import Token from "../token/keychain";
import {ACCESS_TOKEN, REFRESH_TOKEN, REQUEST_TOKEN} from "src/constants/token/token.constants.ts";
import AuthStackNavigation from "src/navigation/stack/AuthStackNavigation.tsx";
import {navigate} from "src/navigation/RootNavigation.tsx";

export const requestInterceptor = (
    config: InternalAxiosRequestConfig) : InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    if (Token.getToken(REFRESH_TOKEN) === null) {
        navigate("rootAuth")
    } else {
        config.headers[REQUEST_TOKEN] = `Bearer ${ACCESS_TOKEN}`;
    }

    return config;
}
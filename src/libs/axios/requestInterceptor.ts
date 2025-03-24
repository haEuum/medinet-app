import { InternalAxiosRequestConfig } from "axios";
import Token from "../token/keychain";
import {ACCESS_TOKEN, REFRESH_TOKEN, REQUEST_TOKEN} from "src/constants/token/token.constants";
import AuthStackNavigation from "src/navigation/stack/AuthStackNavigation";
import {navigate} from "src/navigation/RootNavigation";

export const requestInterceptor = (
    config: InternalAxiosRequestConfig) : InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    if (Token.getToken(REFRESH_TOKEN) === null) {
        navigate("rootAuth")
    } else {
        config.headers[REQUEST_TOKEN] = `Bearer ${ACCESS_TOKEN}`;
    }

    return config;
}
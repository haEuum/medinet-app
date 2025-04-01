import axios, {AxiosRequestConfig} from "axios";
import Token from "../token";
import {REQUEST_TOKEN, ACCESS_TOKEN} from "src/constants/token/token.constants";
import {requestInterceptor} from "src/libs/axios/requestInterceptor";
import {responseErrorInterceptor} from "src/libs/axios/responseErrorInterceptor";

const {SERVER_URL} = require("@env");

const createCustomAxiosInstance = (baseURL?: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Arrow-Origin": "*",
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

MedinetAxios.interceptors.request.use((res) => res, requestInterceptor);
MedinetAxios.interceptors.response.use((res) => res, responseErrorInterceptor)
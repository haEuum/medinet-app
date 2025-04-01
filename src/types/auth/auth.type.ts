export interface LoginProps{
    phoneNumber: string;
    password: string;
}

export interface LoginResponse {
    data: {
        accessToken: string;
        refreshToken: string;
    }
}
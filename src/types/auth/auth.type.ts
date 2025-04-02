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

export interface AuthenticationResponse {
    data: {
        phoneNumber: string;
        authenticationCode: string;
    };
}

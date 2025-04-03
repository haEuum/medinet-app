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

export interface NewAccessToken {
    data: {
        accessToken: string;
    }
}

export interface AuthenticationResponse {
    data: {
        phoneNumber: string;
        authenticationCode: string;
    };
}

export interface Authentication {
    phoneNumber: string;
}
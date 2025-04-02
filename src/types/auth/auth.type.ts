export interface Login {
  phoneNum: string;
  password: string;
}

export interface LoginResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface Authentication {
  phoneNum: string;
}

export interface AuthenticationResponse {
  data: {
    phoneNum: string;
    authenticationCode: string;
  };
}

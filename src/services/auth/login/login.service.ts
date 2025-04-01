import { MedinetAxios } from "src/libs/axios/customAxios";
import { Login, LoginResponse } from "src/types/auth/auth.type";

export const login = async (login: Login): Promise<LoginResponse> => {
  try {
    const { data } = await MedinetAxios.post<LoginResponse>("/login", login);
    return data;
  } catch (error) {
    throw new Error("로그인 요청에 실패했습니다.");
  }
};

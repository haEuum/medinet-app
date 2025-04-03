import { MedinetAxios } from "src/libs/axios/customAxios";
import {
  Authentication,
  AuthenticationResponse,
} from "src/types/auth/login.type";
import {SignUp} from "src/types/auth/signup.type";


export const signUp = async (signupData: SignUp) => {
  try {
    const {data} = await MedinetAxios.post<SignUp>(`/member/signup`, signupData);
    return data;
  } catch (error) {
    throw new Error("회원가입 요청에 실패했습니다.")
  }
}

export const sendSMS = async (
  sms: Authentication
): Promise<AuthenticationResponse> => {
  try {
    const { data } = await MedinetAxios.post<AuthenticationResponse>(
      "/sms/send",
      sms
    );
    return data;
  } catch (error) {
    throw new Error("인증번호 요청에 실패했습니다.");
  }
};

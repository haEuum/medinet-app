import { MedinetAxios } from "src/libs/axios/customAxios";
import {
  Authentication,
  AuthenticationResponse,
} from "src/types/auth/auth.type";

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

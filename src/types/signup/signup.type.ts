export type SignupStackParamList = {
  Step1: undefined; // 이름 입력
  Step2: { name: string }; // 비밀번호 입력
  Step3: { name: string; password: string }; // 전화번호 입력
  Step4: { name: string; phoneNum: string; password: string; code:string;}; // 인증번호 입력 (서버 전송 X)
  Step5: { name: string; phoneNum: string; password: string }; // 직군 선택
  Step6: {
    name: string;
    phoneNum: string;
    password: string;
    userClass: string;
  }; // 분야 선택
  Step7: {
    name: string;
    phoneNum: string;
    password: string;
    userClass: string;
    field: string;
  }; 
};

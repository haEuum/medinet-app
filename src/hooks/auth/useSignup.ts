import { useSignUpStore } from "src/stores/auth/signup.store";
import { SignUp } from "src/types/auth/signup.type";

const stepFieldMap: Record<number, keyof SignUp> = {
  1: "name",
  2: "password",
  3: "phoneNumber",
  4: "code",
  5: "userClass",
  6: "field",
};

const labelMap: Partial<Record<keyof SignUp, string>> = {
  name: "이름",
  password: "비밀번호",
  phoneNumber: "휴대폰 번호",
  code: "인증번호",
  userClass: "직군",
  field: "분야",
};

const useSignUp = () => {
  const { update } = useSignUpStore();

  const handleInput = (field: keyof SignUp, value: string) => {
    update(field, value);
  };

  const getFieldKeyByStep = (step: number): keyof SignUp => {
    return stepFieldMap[step];
  };

  const validateField = (step: number): string | null => {
    const field = stepFieldMap[step];
    const value = useSignUpStore.getState()[field];
    if (!value?.trim()) {
      return `${labelMap[field] ?? "필드"}를 입력해주세요.`;
    }
    return null;
  };

  return { handleInput, getFieldKeyByStep, validateField };
};

export default useSignUp;
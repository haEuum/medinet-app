import { useSignUpStore } from "src/stores/auth/signup.store";
import { SignUp } from "src/types/auth/signup.type";
import { signUp } from "src/services/auth/signup/signup.service";
import { showToast } from "src/libs/toast/toast";
import { useStepStore } from "src/stores/auth/step.store";

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
  const update = useSignUpStore((state) => state.update);
  const { step } = useStepStore();

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

  const submit = async () => {
    const error = validateField(step);
    if (error) {
      showToast("info", error);
      return;
    }

    const data: SignUp = useSignUpStore.getState();

    try {
      await signUp(data);
      showToast("success", "회원가입이 완료되었습니다.");
    } catch (err) {
      showToast("error", "회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return { handleInput, getFieldKeyByStep, validateField, submit };
};

export default useSignUp;
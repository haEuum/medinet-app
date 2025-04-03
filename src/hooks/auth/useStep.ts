import { useSignUpStore } from "src/stores/auth/signup.store";
import { useStepStore } from "src/stores/auth/step.store";
import { signUp } from "src/services/auth/signup/signup.service";
import { showToast } from "src/libs/toast/toast";
import useSignUp from "./useSignup";

const TOTAL_STEPS = 6;

const useStep = () => {
    const { step, progress, next, prev } = useStepStore();
    const { validateField } = useSignUp();
    const signUpData = useSignUpStore();

    const nextStep = () => {
        const error = validateField(step);
        if (error) {
            showToast("info", error);
            return;
        }
        next(TOTAL_STEPS);
    };

    const prevStep = () => {
        prev(TOTAL_STEPS);
    };

    const submit = async () => {
        const error = validateField(step);
        if (error) {
            showToast("info", error);
            return;
        }

        try {
            await signUp(signUpData);
            showToast("success", "회원가입이 완료되었습니다.");
        } catch (err) {
            showToast("error", "회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return {
        step,
        progress,
        nextStep,
        prevStep,
        submit,
    };
};

export default useStep;
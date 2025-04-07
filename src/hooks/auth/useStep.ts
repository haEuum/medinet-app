import { useStepStore } from "src/stores/auth/step.store";
import { showToast } from "src/libs/toast/toast";
import useSignUp from "./useSignup";

const TOTAL_STEPS = 6;

const useStep = () => {
    const { step, progress, next, prev } = useStepStore();
    const { validateField } = useSignUp();

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

    return {
        step,
        progress,
        nextStep,
        prevStep,
    };
};

export default useStep;
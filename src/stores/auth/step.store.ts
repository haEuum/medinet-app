
import { create } from "zustand";

type StepStore = {
    step: number;
    progress: number;
    setStep: (step: number) => void;
    next: (total: number) => void;
    prev: (total: number) => void;
    reset: () => void;
};

export const useStepStore = create<StepStore>(set => ({
    step: 1,
    progress: (1 / 6) * 100,

    setStep: (step) =>
        set(() => ({
            step,
            progress: (step / 6) * 100,
        })),

    next: (total) =>
        set(prev => {
            const nextStep = prev.step + 1;
            return {
                step: nextStep,
                progress: (nextStep / total) * 100,
            };
        }),

    prev: (total) =>
        set(prev => {
            const prevStep = Math.max(prev.step - 1, 1);
            return {
                step: prevStep,
                progress: (prevStep / total) * 100,
            };
        }),

    reset: () => set({ step: 1, progress: (1 / 6) * 100 }),
}));
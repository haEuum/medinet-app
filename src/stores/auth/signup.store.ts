import { create } from "zustand";
import { SignUp } from "src/types/auth/signup.type";

type SignUpStore = SignUp & {
    reset: () => void;
    update: (key: keyof SignUp, value: string) => void;
};

export const useSignUpStore = create<SignUpStore>(set => ({
    name: "",
    password: "",
    phoneNumber: "",
    code: "",
    userClass: "",
    field: "",

    update: (key, value) => set(state => ({ ...state, [key]: value })),
    reset: () => set({
        name: "",
        password: "",
        phoneNumber: "",
        code: "",
        userClass: "",
        field: "",
        update: () => {},
        reset: () => {}
    }),
}));
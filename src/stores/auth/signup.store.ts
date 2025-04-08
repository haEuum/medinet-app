import { create } from "zustand";
import { SignUp } from "src/types/auth/signup.type";

interface SignUpState extends SignUp {
    update: <K extends keyof SignUp>(key: K, value: SignUp[K]) => void;
}

export const useSignUpStore = create<SignUpState>((set) => ({
    name: "",
    password: "",
    phoneNumber: "",
    code: "",
    userClass: "",
    field: "",
    update: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
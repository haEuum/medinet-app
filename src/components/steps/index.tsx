import React from "react";
import StepInput from "./input";
import StepSelect from "./select";
import { useStepStore } from "src/stores/auth/step.store";
import { useSignUpStore } from "src/stores/auth/signup.store";
import {FieldCategory} from "src/types/user/field.type";

const StepContainer = () => {
    const { step } = useStepStore();
    const { name, password, phoneNumber, code, field, userClass, update } = useSignUpStore();

    const majorOptions = Object.keys(FieldCategory);

    const detailOptions = userClass && userClass in FieldCategory
        ? Object.keys(FieldCategory[userClass as keyof typeof FieldCategory])
        : [];

    const stepComponentMap: Record<number, React.ReactNode> = {
        1: (
            <StepInput
                title="이름"
                value={name}
                onChange={(v) => update("name", v)}
                placeholder="이름을 입력해주세요"
            />
        ),
        2: (
            <StepInput
                title="비밀번호"
                value={password}
                onChange={(v) => update("password", v)}
                placeholder="비밀번호를 입력해주세요"
            />
        ),
        3: (
            <StepInput
                title="전화번호"
                value={phoneNumber}
                onChange={(v) => update("phoneNumber", v)}
                placeholder="전화번호를 입력해주세요"
            />
        ),
        4: (
            <StepInput
                title="인증번호"
                value={code}
                onChange={(v) => update("code", v)}
                placeholder="인증번호를 입력해주세요"
            />
        ),
        5: (
            <StepSelect
                title="직군을 선택해주세요"
                selected={userClass}
                onSelect={(v) => update("userClass", v)}
                options={majorOptions}
            />
        ),
        6: (
            <StepSelect
                title="분야를 선택해주세요"
                selected={field}
                onSelect={(v) => update("field", v)}
                options={detailOptions}
                modal={true}
            />
        ),
    };

    return stepComponentMap[step] ?? null;
};

export default StepContainer;
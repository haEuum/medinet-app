import React from "react";
import StepInput from "./input";
import StepSelect from "./select";
import { useStepStore } from "src/stores/auth/step.store";
import { useSignUpStore } from "src/stores/auth/signup.store";
import { FieldCategory, field } from "src/types/user/field.type";

const majorLabelMap: Record<field, string> = {
  INTERNAL_MEDICINE: "내과",
  SURGERY: "외과",
  FIRE_ADMINISTRATION_COMMAND: "소방 행정/지휘",
  FIRE_RESCUE: "소방 구조",
  GENERAL_RESCUE: "일반 구조",
  EMERGENCY_TRANSPORT: "응급 구조/이송",
};

const StepContainer = () => {
  const { step } = useStepStore();

  const name = useSignUpStore((state) => state.name);
  const password = useSignUpStore((state) => state.password);
  const phoneNumber = useSignUpStore((state) => state.phoneNumber);
  const code = useSignUpStore((state) => state.code);
  const userClass = useSignUpStore((state) => state.userClass);
  const field = useSignUpStore((state) => state.field);
  const update = useSignUpStore((state) => state.update);

  const majorOptions = Object.keys(FieldCategory).map((key) => ({
    label: majorLabelMap[key as field],
    value: key,
  }));
  console.log("majorOptions", majorOptions);

  const detailOptions =
    userClass && userClass in FieldCategory
      ? Object.entries(FieldCategory[userClass as field]).map(
          ([key, value]) => ({
            label: value,
            value: key,
          })
        )
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

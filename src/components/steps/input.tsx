import React from "react";
import { View, StyleSheet } from "react-native";
import PretendardText from "src/components/pretendard/Pretendard";
import TextField from "src/components/ui/textfeild/textfeild";
import Button from "src/components/ui/button";
import { useStepStore } from "src/stores/auth/step.store";

type StepInputProps = {
    title: string;
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
};

const StepInput = ({ title, value, onChange, placeholder }: StepInputProps) => {
    const { next } = useStepStore();

    return (
        <View style={styles.container}>
            <PretendardText variant="Title1Bold">{title}</PretendardText>
            <TextField value={value} onChangeText={onChange} placeholder={placeholder} />
            <Button onClicked={() => next(6)} children="다음" textStyle="HeadLine2Bold" />
        </View>
    );
};

export default StepInput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 20,
        flex: 1,
        justifyContent: "center",
    },
});
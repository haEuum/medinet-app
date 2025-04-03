import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PretendardText from "src/components/pretendard/Pretendard";
import Button from "src/components/ui/button";
import { useStepStore } from "src/stores/auth/step.store";

type Props = {
    title: string;
    selected: string;
    onSelect: (value: string) => void;
    options: string[];
};

const StepSelect = ({ title, selected, onSelect, options }: Props) => {
    const { next } = useStepStore();

    return (
        <View style={styles.container}>
            <PretendardText variant="Title1Bold">{title}</PretendardText>
            <RNPickerSelect
                onValueChange={onSelect}
                items={options.map((option) => ({
                    label: option,
                    value: option,
                }))}
                placeholder={{ label: "선택해주세요", value: null }}
                value={selected}
                style={pickerStyles}
                useNativeAndroidPickerStyle={false}
            />
            <Button children="다음" onClicked={() => next(6)} textStyle="HeadLine2Bold" />
        </View>
    );
};

export default StepSelect;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 20,
        flex: 1,
        justifyContent: "center",
    },
});

const pickerStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        color: "#000",
        backgroundColor: "#fff",
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        color: "#000",
        backgroundColor: "#fff",
    },
};
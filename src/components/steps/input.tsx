import React from "react";
import { View, SafeAreaView } from "react-native";
import PretendardText from "src/components/pretendard/Pretendard";
import TextField from "src/components/ui/textfeild/textfeild";
import Button from "src/components/ui/button";
import { useStepStore } from "src/stores/auth/step.store";
import { styles } from "./style";
import Layout from "src/components/common/layout";
import TopAppBar from "src/components/common/topAppBar";

type StepInputProps = {
    title: string;
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
};

const StepInput = ({ title, value, onChange, placeholder }: StepInputProps) => {
    const { next } = useStepStore();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout>
                <TopAppBar />
                <View style={styles.container}>
                    <PretendardText variant="Title1Bold">{title}</PretendardText>
                    <TextField
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                    />
                    <Button
                        onClicked={() => next(6)}
                        fullWidth
                        textStyle="HeadLine2Bold"
                        children="다음"
                    />
                </View>
            </Layout>
        </SafeAreaView>
    );
};

export default StepInput;

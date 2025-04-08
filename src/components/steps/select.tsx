import React, { useState, useRef, useEffect } from "react";
import {
    View,
    TouchableWithoutFeedback,
    Animated,
    StyleSheet,
    Dimensions,
    SafeAreaView,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import PretendardText from "src/components/pretendard/Pretendard";
import Button from "src/components/ui/button";
import { useStepStore } from "src/stores/auth/step.store";
import { useSignUpStore } from "src/stores/auth/signup.store";
import { useNavigation } from "@react-navigation/native";
import { pickerStyles, styles, modalStyles } from "./style";
import Modal from "src/components/modal/modal";
import TopAppBar from "../common/topAppBar";
import Layout from "../common/layout";

interface Props {
    title: string;
    selected: string;
    onSelect: (value: string) => void;
    options: string[];
    modal?: boolean;
}

const StepSelect = ({ title, selected, onSelect, options, modal = false }: Props) => {
    const { next } = useStepStore();
    const signupData = useSignUpStore();
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(Dimensions.get("window").height)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleNext = () => {
        if (modal) {
            setIsModalVisible(true);
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            next(6);
        }
    };

    const handleCloseModal = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: Dimensions.get("window").height,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setIsModalVisible(false);
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Layout>
                <TopAppBar />
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
                    <Button
                        fullWidth
                        children="다음"
                        onClicked={handleNext}
                        textStyle="HeadLine2Bold"
                    />
                </View>

                {isModalVisible && (
                    <View style={modalStyles.container}>
                        <Animated.View
                            style={[
                                modalStyles.overlay,
                                {
                                    opacity: fadeAnim,
                                },
                            ]}
                        >
                            <TouchableWithoutFeedback onPress={handleCloseModal}>
                                <View style={modalStyles.background} />
                            </TouchableWithoutFeedback>
                        </Animated.View>

                        <Animated.View
                            style={[
                                modalStyles.modalContent,
                                {
                                    transform: [{ translateY: slideAnim }],
                                },
                            ]}
                        >
                            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                                <View>
                                    <Modal
                                        title="계정을 생성하시겠습니까?"
                                        subtitle="소속과 직군은 추후 수정 때 추가적인 절차가 필요합니다."
                                        content={signupData.userClass}
                                        field={signupData.field}
                                        name={signupData.name}
                                        onCancel={handleCloseModal}
                                        onClick={() => navigation.navigate("Complete")}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </Animated.View>
                    </View>
                )}
            </Layout>
        </SafeAreaView>
    );
};

export default StepSelect;

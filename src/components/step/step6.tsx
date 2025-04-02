import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Palette } from "src/design/theme/color";
import TopAddBar from "src/components/ui/topaddbar/topaddbar";
import AuthButton from "src/components/ui/authbutton/authbutton";
import { SignupStackParamList } from "src/types/signup/signup.type";
import { StackScreenProps } from "@react-navigation/stack";
import useSignup from "src/hooks/auth/useSignup";
import Modal from "src/components/modal/modal";

type Step6Props = StackScreenProps<SignupStackParamList, "Step6">;

const Step6 = ({ route, navigation }: Step6Props) => {
  const { field, onChangeField } = useSignup();
  const { name, phoneNum, password, userClass } = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const filteredFields = userClass ? jobFields[userClass] || [] : [];

  const handleSubmit = () => {
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <View style={styles.statusBar}></View>
        <TopAddBar />
        <View style={styles.signUpContent}>
          <Text style={styles.title}>분야</Text>

          <RNPickerSelect
            onValueChange={(itemValue) => onChangeField(itemValue)}
            items={filteredFields}
            placeholder={{ label: "분야를 선택해주세요", value: null }}
            style={pickerSelectStyles}
            value={field}
          />

          <View style={styles.buttonView}>
            <AuthButton
              label="완료"
              onClicked={handleSubmit}
              isActive={field.length > 0}
            />
          </View>
        </View>

        <Modal
          title="계정을 생성하시겠습니까?"
          subtitle="소속과 직군은 추후 수정 때 추가적인 절차가 필요합니다."
          name="심서훈"
          content="의료 (내과, 중환자)"
          field="응급의학과"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Step6;

const styles = StyleSheet.create({
  signUpView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  statusBar: {
    height: 70,
  },
  signUpContent: {
    width: "90%",
    alignItems: "center",
    paddingTop: 40,
    flex: 1,
    gap: 5,
  },
  title: {
    color: Palette.Common[100],
    fontSize: 28,
    fontWeight: "700",
  },
  buttonView: {
    width: "90%",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    backgroundColor: "#fff",
    width: "100%",
    textAlign: "center",
  },
  inputAndroid: {
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    backgroundColor: "#fff",
    width: "100%",
    textAlign: "center",
  },
});

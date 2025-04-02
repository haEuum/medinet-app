import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Palette } from "src/design/theme/color";
import TopAddBar from "src/components/ui/topaddbar/topaddbar";
import AuthButton from "src/components/ui/authbutton/authbutton";
import { SignupStackParamList } from "src/types/signup/signup.type";
import { StackScreenProps } from "@react-navigation/stack";
import useSignup from "src/hooks/auth/useSignup";

type Step5Props = StackScreenProps<SignupStackParamList, "Step5">;

const SignUp = ({ route, navigation }: Step5Props) => {
  const { userClass, onChangeUserClass } = useSignup();
  const { name, phoneNum, password } = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <View style={styles.statusBar}></View>
        <TopAddBar />
        <View style={styles.signUpContent}>
          <Text style={styles.title}>직군</Text>
          <RNPickerSelect
            onValueChange={(itemValue) => onChangeUserClass(itemValue)}
            items={jobCategories}
            placeholder={{ label: "직군을 선택해주세요", value: null }}
            style={pickerSelectStyles}
          />
          <View style={styles.buttonView}>
            <AuthButton
              label="다음"
              onClicked={() =>
                navigation.navigate("Step6", {
                  name,
                  phoneNum,
                  password,
                  userClass,
                })
              }
              isActive={userClass.length > 0}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

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

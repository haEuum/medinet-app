import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Palette, Semantic } from "src/design/theme/color";
import TopAddBar from "src/components/ui/topaddbar/topaddbar";
import TextField from "src/components/ui/textfeild/textfeild";
import AuthButton from "src/components/ui/authbutton/authbutton";
import { SignupStackParamList } from "src/types/signup/signup.type";
import { StackScreenProps } from "@react-navigation/stack";
import useSignup from "src/hooks/auth/useSignup";
import { sendSMS } from "src/services/auth/signup/signup.service";

type Step4Props = StackScreenProps<SignupStackParamList, "Step4">;

const Step4 = ({ route, navigation }: Step4Props) => {
  const { authenticationCode, onChangeAuthenticationCode } = useSignup();
  const { name, phoneNum, password } = route.params;

  // const handleAuthentication = async () => {
  //   try {
  //     const res = await sendSMS({ phoneNum: phoneNum });
  //     const isValid = res.data.authenticationCode;

  //     if (isValid === authenticationCode) {
  //       navigation.navigate("Step5", { name, phoneNum, password });
  //     } else {
  //       alert("인증번호가 올바르지 않습니다.");
  //     }
  //   } catch (error) {
  //     console.error("인증 실패:", error);
  //     alert("인증 과정에서 문제가 발생했습니다.");
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <View style={styles.statusBar}></View>
        <TopAddBar />
        <View style={styles.signUpContent}>
          <View style={styles.space}></View>
          <Text style={styles.title}>인증번호</Text>
          <View style={styles.space}></View>
          <TextField
            value={authenticationCode}
            onChangeText={onChangeAuthenticationCode}
            placeholder="인증번호를 입력해주세요"
            align="center"
          />
          <View style={styles.buttonView}>
            <AuthButton
              label="다음"
              // onClicked={handleAuthentication}
              onClicked={() => navigation.navigate("Step5", { name, phoneNum, password })}
              isActive={authenticationCode.length > 0}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Step4;

const styles = StyleSheet.create({
  signUpView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 852,
    backgroundColor: "#fff",
    width: "100%",
  },
  statusBar: {
    height: 70,
  },
  signUpContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    alignSelf: "stretch",
    paddingTop: 40,
    flex: 1,
    gap: 5,
  },
  space: {
    height: 80,
  },
  title: {
    color: Palette.Common[100],
    textAlign: "center",

    fontSize: 28,
    fontWeight: 700,
  },
  buttonView: {
    width: "90%",
  },
});

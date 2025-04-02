import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { Palette } from "src/design/theme/color";
import TopAddBar from "src/components/ui/topaddbar/topaddbar";
import TextField from "src/components/ui/textfeild/textfeild";
import AuthButton from "src/components/ui/authbutton/authbutton";
import { SignupStackParamList } from "src/types/signup/signup.type";
import { StackScreenProps } from "@react-navigation/stack";
import useSignup from "src/hooks/auth/useSignup";
import { sendSMS } from "src/services/auth/signup/signup.service";

type Step3Props = StackScreenProps<SignupStackParamList, "Step3">;

const Step3 = ({ route, navigation }: Step3Props) => {
  const { phoneNum, onChangephoneNum } = useSignup();
  const { name, password } = route.params;
  const [code, setCode] = useState('');

  const requestAuthenticationCode = async () => {
    try {
      const res = await sendSMS({ phoneNum });
      const code = res.data.authenticationCode;

      if (code) {
        setCode(code);
        navigation.navigate("Step4", {
          name,
          password,
          phoneNum,
          code,
        });
      } else {
        Alert.alert("오류", "인증번호를 받을 수 없습니다.");
      }
    } catch (error) {
      console.error("인증번호 요청 실패:", error);
      Alert.alert("오류", "인증번호 요청 중 문제가 발생했습니다.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.signUpView}>
        <View style={styles.statusBar}></View>
        <TopAddBar />
        <View style={styles.signUpContent}>
          <View style={styles.space}></View>
          <Text style={styles.title}>전화번호</Text>
          <View style={styles.space}></View>
          <TextField
            value={phoneNum}
            onChangeText={onChangephoneNum}
            placeholder="전화번호를 입력해주세요"
            align="center"
          />
          <View style={styles.buttonView}>
            <AuthButton
              label="인증번호 요청하기"
            //   onClicked={requestAuthenticationCode}
              onClicked={()=> navigation.navigate("Step4", {
          name,
          password,
          phoneNum,
          code,
        })}
              isActive={phoneNum.length > 0}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Step3;

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

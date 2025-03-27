import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "src/components/ui/icons/Logo.svg";
import TextField from "src/components/ui/textfeild/textfeild";
import AuthButton from "src/components/ui/authbutton/authbutton";
import { Palette, Semantic } from "src/design/theme/color";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "src/types/navigation/navigation.type";

type SignUp = StackNavigationProp<AuthStackParamList, "SignUp">;

const Login = () => {
  const navigation = useNavigation<SignUp>();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.loginMainView}>
        <Logo width={200} height={30} />
        <View style={styles.space} />

        <View style={styles.inputField}>
          <TextField
            align="title-left"
            type="phone"
            label="전화번호"
            placeholder="전화번호를 입력해주세요."
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <TextField
            align="title-left"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.buttonField}>
          <AuthButton label="로그인하기" isActive={password.length > 0}/>
        </View>

        <View style={styles.goSignUpField}>
          <Text style={styles.text}>계정이 없으신가요?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>회원가입하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.space} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginMainView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
    gap: 5,
  },
  space: {
    height: 40,
  },
  inputField: {
    display: "flex",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  buttonField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 15,
    width: "90%",
  },
  goSignUpField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 10,
  },
  text: {
    color: Palette.Common[100],
    textAlign: "center",
  },
  linkText: {
    color: Semantic.Primary.AlterNative,
    fontWeight: "bold",
  },
});

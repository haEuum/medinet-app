import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Logo from "src/assets/images/logo.svg";
import TextField from "src/components/ui/textField";
import Button from "src/components/ui/button";
import { styles } from "./style";
import { AuthProps } from "src/types/navigation/auth/auth.navigation";
import useLogin from "src/hooks/auth/useLogin";

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthProps>>();
    const { loginData, handleLoginData, submitLoginData } = useLogin();

    return (
        <View style={styles.container}>
            <Logo width={200} height={30} />
            <View style={styles.space} />

            <View style={styles.inputContainer}>
                <TextField
                    align="title-left"
                    type="phone"
                    label="전화번호"
                    placeholder="전화번호를 입력해주세요. (- 없이)"
                    value={loginData.phoneNumber}
                    onChangeText={(text) => handleLoginData("phoneNumber", text)}
                />
                <TextField
                    align="title-left"
                    type="password"
                    label="비밀번호"
                    placeholder="비밀번호를 입력해주세요."
                    value={loginData.password}
                    onChangeText={(text) => handleLoginData("password", text)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button text="로그인하기" onPress={submitLoginData} />
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>계정이 없으신가요?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signupLink}>회원가입하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
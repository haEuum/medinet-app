import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Alert } from "react-native";
import Token from "src/libs/token";
import { ACCESS_TOKEN } from "src/constants/token/token.constants";

const Login = () => {
    const [tokenValue, setTokenValue] = useState<string | null>(null);

    const handleBiometricLogin = async () => {
        try {
            const token = await Token.getToken(ACCESS_TOKEN); // 생체 인증 포함 조회

            if (token) {
                setTokenValue(token);
                Alert.alert("로그인 성공", `토큰: ${token}`);
                // 여기에 navigation 또는 로그인 처리 로직 연결 가능
            } else {
                Alert.alert("로그인 실패", "토큰이 없거나 인증에 실패했습니다.");
            }
        } catch (error) {
            Alert.alert("에러", "생체 인증 중 문제가 발생했습니다.");
            console.error("생체 인증 에러:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>생체 인증으로 로그인</Text>
            <Button title="생체 인증하기" onPress={handleBiometricLogin} />
            {tokenValue && <Text>토큰 값: {tokenValue}</Text>}
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
    },
});
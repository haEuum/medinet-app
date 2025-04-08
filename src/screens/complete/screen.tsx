import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "src/components/common/layout";
import Complete from "src/assets/images/Vector.svg";
import PretendardText from "src/components/pretendard/Pretendard";
import Button from "src/components/ui/button";
import { signUp } from "src/services/auth/signup/signup.service";
import { showToast } from "src/libs/toast/toast";
import { useSignUpStore } from "src/stores/auth/signup.store";

const Screen = () => {
  const navigation = useNavigation();
  const signUpData = useSignUpStore();

  const handleSignup = async (biometricAuthNum: number) => {
    try {
      await signUp({
        name: signUpData.name,
        password: signUpData.password,
        phoneNumber: signUpData.phoneNumber,
        field: signUpData.field,
        userClass: signUpData.userClass,
        biometricAuthNum,
      });

      if (biometricAuthNum === 1) {
        navigation.navigate("BiometricAuth");
      } else {
        navigation.navigate("Main");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
      showToast("error", "오류", errorMessage);
    }
  };

  return (
    <Layout>
      <View style={styles.completeMain}>
        <View style={styles.space} />
        <View style={styles.completeView}>
          <View style={styles.textView}>
            <Complete width={50} height={37} />
            <View style={styles.text}>
              <PretendardText variant="HeadLine2Bold">
                회원가입이 완료되었어요!
              </PretendardText>
              <PretendardText variant="BodyRegular">
                생체 인증을 하면 더 편리하게 로그인이 가능해요
              </PretendardText>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button fullWidth onClicked={() => handleSignup(1)} size="small">
              생체 인증
            </Button>
            <Button
              fullWidth
              onClicked={() => handleSignup(0)}
              size="small"
              color="AlterNative"
            >
              메인화면
            </Button>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Screen;

const styles = StyleSheet.create({
  completeMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  space: {
    height: 200,
  },
  completeView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 200,
  },
  textView: {
    display: "flex",
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  buttonContainer: {
    display: "flex",
    padding: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
  },
  text: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
});

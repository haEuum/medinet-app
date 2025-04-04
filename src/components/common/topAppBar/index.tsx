import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useStepStore } from "src/stores/auth/step.store"; // 스텝 상태 추가
import Arrow from "src/assets/images/Arrows-chevron/Chevron-Left.svg";

const TopAppBar = () => {
  const navigation = useNavigation();
  const { step, prev } = useStepStore(); // 현재 스텝과 이전 스텝 이동 함수 가져오기

  const handleGoBack = () => {
    if (step > 1) {
      prev(step - 1); // 전 스텝으로 이동
    } else {
      navigation.goBack(); // 첫 번째 스텝이면 이전 화면으로 나가기
    }
  };

  return (
    <View style={styles.topAppBarView}>
      <View style={styles.arrowView}>
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.7}>
          <Arrow width={24} height={24} />
        </TouchableOpacity>
        <View style={styles.headLine}></View>
      </View>
    </View>
  );
};

export default TopAppBar;

const styles = StyleSheet.create({
  topAppBarView: {
    display: "flex",
    alignItems: "center",
  },
  arrowView: {
    width: 400,
    display: "flex",
    paddingLeft: 8,
    alignItems: "flex-start",
    gap: 4,
    alignSelf: "stretch",
    marginLeft: 16,
  },
  headLine: {},
});

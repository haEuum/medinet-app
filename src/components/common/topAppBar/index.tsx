import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Arrow from "src/assets/images/Arrows-chevron/Chevron-Left.svg";

const TopAppBar = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack(); 
  };

  return (
    <View style={styles.topAddBarView}>
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
  topAddBarView: {
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

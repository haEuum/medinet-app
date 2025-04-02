import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Palette, Semantic } from "src/design/theme/color";
import { Shape } from "src/design/theme/shape";
import { ModalProps } from "src/types/modal/modal.type";


const modal = ({ title, subtitle, content, field, name }: ModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.topButton} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <View>
            {name} · {content}
          </View>
          <Text>{field}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        
      </View>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    width: 369,
    height: 292,
    paddingTop: 8,
    paddingRight: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    flexDirection: "column",
    alignItems: "center",
    gap: 32,
  },
  topButton: {
    width: 48,
    height: 4,
    borderRadius: Shape.ExtraSmall.radius,
    backgroundColor: Semantic.Fill.AlterNative,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    alignSelf: "stretch",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
    alignSelf: "stretch",
  },
  subtitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  buttonContainer: {

  }
});

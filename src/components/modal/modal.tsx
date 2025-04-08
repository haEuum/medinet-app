import React from "react";
import { View } from "react-native";
import { ModalProps } from "src/types/modal/modal.type";
import { styles } from "./style";
import Button from "src/components/ui/button";
import PretendardText from "../pretendard/Pretendard";
import { useNavigation } from "@react-navigation/native";

const modal = ({ title, subtitle, content, field, name, onCancel, onClick }: ModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.topButton} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <PretendardText variant="HeadLine1Bold">{title}</PretendardText>
          <PretendardText style={styles.subtitle} variant="CaptionMedium">{subtitle}</PretendardText>
        </View>
        <View style={styles.subtitleContainer}>
          <View>
            <PretendardText variant="BodyMedium">{name} · {content}</PretendardText>
          </View>
          <PretendardText style={styles.fieldText} variant="LabelMedium">{field}</PretendardText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          children="취소"
          onClicked={onCancel}
          color="AlterNative"
          size="extraLarge"
        />
        <Button children="네, 생성할게요" onClicked={onClick} size="extraLarge" />
      </View>
    </View>
  );
};

export default modal;
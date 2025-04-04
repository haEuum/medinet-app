import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import PretendardText from "src/components/pretendard/Pretendard";
import { Semantic, Palette } from "src/design/theme/color";
import { Shape } from "src/design/theme/shape";
import { Typography } from "src/design/theme/typography";

type ButtonSize = "extraLarge" | "large" | "medium" | "small";
type ButtonColor = "primary" | "AlterNative" | "Assistive" | "gray";
type ButtonRadius = "large" | "medium" | "small" | "extraSmall";
type TypographyVariant = keyof typeof Typography;

interface ButtonProps {
  children: string;
  onClicked: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  radius?: ButtonRadius;
  textStyle?: TypographyVariant;
  fullWidth?: boolean;
}

// 배경색
const Color: Record<ButtonColor, string> = {
  primary: Semantic.Primary.Normal,
  AlterNative: Semantic.Primary.AlterNative,
  Assistive: Semantic.Primary.Assistive,
  gray: Palette.Netural["80"],
};

// 텍스트 색
const TextColor: Record<ButtonColor, string> = {
  primary: Semantic.Static.White,
  AlterNative: Semantic.Secondary.Assistive,
  Assistive: Semantic.Static.White,
  gray: Semantic.Label.AlterNative,
};

// 패딩 설정
const Padding: Record<ButtonSize, { paddingVertical: number; paddingHorizontal: number }> = {
  extraLarge: { paddingVertical: 14, paddingHorizontal: 24 },
  large: { paddingVertical: 14, paddingHorizontal: 20 },
  medium: { paddingVertical: 10, paddingHorizontal: 16 },
  small: { paddingVertical: 8, paddingHorizontal: 12 },
};

// size별 기본 radius
const RadiusBySize: Record<ButtonSize, ButtonRadius> = {
  extraLarge: "large",
  large: "medium",
  medium: "small",
  small: "extraSmall",
};

// radius 값
const RadiusValue: Record<ButtonRadius, number> = {
  large: Shape.Large,
  medium: Shape.Medium,
  small: Shape.Small,
  extraSmall: Shape.ExtraSmall,
};

const Button = ({
  children,
  onClicked,
  size = "medium",
  color = "primary",
  radius,
  textStyle = "BodyBold",
  fullWidth = false
}: ButtonProps) => {
  const padding = Padding[size];
  const resolvedRadius = radius ?? RadiusBySize[size]; // radius가 없으면 size 기준으로 설정

  const buttonStyle: StyleProp<ViewStyle> = {
    ...styles.base,
    ...padding,
    backgroundColor: Color[color],
    borderRadius: RadiusValue[resolvedRadius],
    width: fullWidth ? "100%" : "auto",
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={0.8}
      onPress={onClicked}
    >
      <PretendardText variant={textStyle} style={{ color: TextColor[color] }}>
        {children}
      </PretendardText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fullWidth: {
    width: "100%",
  }
});

export default Button;
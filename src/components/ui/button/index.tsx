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

type ButtonSize = "extraLarge" | "small" | "medium" | "large";
type ButtonColor = "primary" | "AlterNative" | "Assistive" | "gray";
type ButtonRadius = "small" | "medium" | "large" | "extraSmall";
type TypographyVariant = keyof typeof Typography;

interface ButtonProps {
  children: string;
  onClicked: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  radius?: ButtonRadius;
  textStyle?: TypographyVariant;
}

// Color
const Color: Record<ButtonColor, string> = {
  primary: Semantic.Primary.Normal,
  AlterNative: Semantic.Primary.AlterNative,
  Assistive: Semantic.Primary.Assistive,
  gray: Palette.Netural["80"],
};

// Padding
const Size: Record<ButtonSize, { paddingVertical: number; paddingHorizontal: number }> = {
  extraLarge: { paddingVertical: 24, paddingHorizontal: 14 },
  large: { paddingVertical: 20, paddingHorizontal: 14 },
  medium: { paddingVertical: 16, paddingHorizontal: 10 },
  small: { paddingVertical: 12, paddingHorizontal: 8 },
};

// Radius
const Radius: Record<ButtonRadius, number> = {
  large: Shape.Large,
  medium: Shape.Medium,
  small: Shape.Small,
  extraSmall: Shape.ExtraSmall,
};

const Button = ({
                  children,
                  onClicked,
                  size = "medium",
                  radius = "medium",
                  color = "primary",
                  textStyle = "BodyRegular",
                }: ButtonProps) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    ...styles.base,
    ...Size[size],
    backgroundColor: Color[color],
    borderRadius: Radius[radius],
  };

  return (
      <TouchableOpacity
          style={buttonStyle}
          activeOpacity={0.8}
          onPress={onClicked}
      >
        <PretendardText variant={textStyle}>
          {children}
        </PretendardText>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
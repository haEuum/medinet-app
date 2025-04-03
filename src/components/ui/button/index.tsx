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

// Background Color
const Color: Record<ButtonColor, string> = {
  primary: Semantic.Primary.Normal,
  AlterNative: Semantic.Primary.AlterNative,
  Assistive: Semantic.Primary.Assistive,
  gray: Palette.Netural["80"],
};

// Text Color
const TextColor: Record<ButtonColor, string> = {
  primary: Semantic.Static.White,
  AlterNative: Semantic.Secondary.Assistive,
  Assistive: Semantic.Static.White,
  gray: Semantic.Label.AlterNative,
};

// Padding
const Size: Record<ButtonSize, { paddingVertical: number; paddingHorizontal: number }> = {
  extraLarge: { paddingVertical: 14, paddingHorizontal: 24 },
  large: { paddingVertical: 14, paddingHorizontal: 20 },
  medium: { paddingVertical: 10, paddingHorizontal: 16 },
  small: { paddingVertical: 8, paddingHorizontal: 12 },
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
                  textStyle = "BodyBold",
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
        <PretendardText variant={textStyle} style={{color: TextColor[color]}}>
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
import React from "react";
import { Text, TextProps } from "react-native";
import useFonts from "src/hooks/fonts/useFonts";
import { FontList } from "src/assets/fonts/fontList";

type PretendardTextProps = TextProps & {
  fontWeight?: keyof typeof FontList;
};

const PretendardText = ({
  children,
  fontWeight = "Medium",
  style,
  ...props
}: PretendardTextProps) => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) return <Text>Loading Fonts...</Text>;

  return (
    <Text style={[style, { fontFamily: FontList[fontWeight] }]} {...props}>
      {children}
    </Text>
  );
};

export default PretendardText;

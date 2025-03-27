import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PretendardText from "src/components/pretendard/Pretendard";
import { Semantic, Palette } from "src/design/theme/color";
import { Shape } from "src/design/theme/shape";

interface InputFieldProps {
  type?: "password" | "name" | "phone";
  align?: "center" | "left" | "title-left";
  label?: string;
  placeholder?: string;
  value: string; 
  onChangeText: (text: string) => void; 
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
}

const InputField = ({
  type,
  align = "left",
  label,
  placeholder,
  value, 
  onChangeText, 
  keyboardType,
}: InputFieldProps) => {
  return (
    <View style={styles.inputContainer}>
      {label && <PretendardText style={styles.label}>{label}</PretendardText>}
      <TextInput
        style={[
          styles.input,
          align === "center" && styles.centerAlign,
          align === "title-left" && styles.titleLeftMargin,
        ]}
        value={value} 
        onChangeText={onChangeText} 
        placeholder={placeholder}
        placeholderTextColor={"#767680"}
        keyboardType={
          keyboardType || (type === "phone" ? "phone-pad" : "default")
        }
        secureTextEntry={type === "password"} 
        textAlign={align === "center" ? "center" : "left"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    gap: 10,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: Semantic.Label.Normal,
  },
  input: {
    display: "flex",
    padding: 15,
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: Shape.ExtraLarge.radius,
    backgroundColor: Semantic.Fill.Assistive,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  centerAlign: {
    textAlign: "center",
  },
  titleLeftMargin: {
    marginTop: 5,
  },
});

export default InputField;

import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  INPUT_HEIGHT,
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
} from "@/constants/styles";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  label: {
    fontSize: FONT_SIZE.medium,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    height: INPUT_HEIGHT,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 15,
    fontSize: FONT_SIZE.medium,
  },
});
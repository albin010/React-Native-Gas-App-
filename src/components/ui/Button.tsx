import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  BUTTON_HEIGHT,
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
} from "@/constants/styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({
  title,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: BUTTON_HEIGHT,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
    fontWeight: "600",
  },
});
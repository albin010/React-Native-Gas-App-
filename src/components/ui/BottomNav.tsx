import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons
          name="home"
          size={28}
          color="#2563EB"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="add-circle"
          size={42}
          color="#2563EB"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Ionicons
          name="person"
          size={28}
          color="#2563EB"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
});
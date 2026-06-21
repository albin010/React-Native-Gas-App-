import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type DashboardCardProps = {
  title: string;
  onPress: () => void;
};

export default function DashboardCard({
  title,
  onPress,
}: DashboardCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});
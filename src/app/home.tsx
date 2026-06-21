import { View, StyleSheet } from "react-native";
import { useState } from "react";

import SearchBar from "@/components/ui/SearchBar";
import DashboardCard from "@/components/ui/DashboardCard";
import BottomNav from "@/components/ui/BottomNav";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.grid}>
        <DashboardCard
          title="Sales"
          onPress={() => {}}
        />

        <DashboardCard
          title="Stock"
          onPress={() => {}}
        />

        <DashboardCard
          title="Report"
          onPress={() => {}}
        />

        <DashboardCard
          title="Customer"
          onPress={() => {}}
        />
      </View>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#9a9ea1",
    justifyContent: "space-between",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
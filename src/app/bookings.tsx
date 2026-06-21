import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Bookings() {
  const bookings = [
    {
      bookingId: 101,
      customer: "John",
      agent: "Albin",
      fullCylinders: 2,
      emptyCylinders: 1,
      balanceCylinders: 10,
      cylinderPrice: 950,
      debitAmount: 1900,
      creditAmount: 1000,
      balanceAmount: 900,
      bookingDate: "21-06-2026",
      bookingTime: "10:30 AM",
    },
    {    bookingId: 101,
      customer: "John",
      agent: "Albin",
      fullCylinders: 2,
      emptyCylinders: 1,
      balanceCylinders: 10,
      cylinderPrice: 950,
      debitAmount: 1900,
      creditAmount: 1000,
      balanceAmount: 900,
      bookingDate: "21-06-2026",
      bookingTime: "10:30 AM",},
  ];

  return (
    <ScrollView horizontal>
      <View>
        {/* Header */}
        <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Date</Text>
            <Text style={styles.headerCell}>Time</Text>
            <Text style={styles.headerCell}>Full</Text>
            <Text style={styles.headerCell}>Empty</Text>
            <Text style={styles.headerCell}>Balance</Text>
            <Text style={styles.headerCell}>Price</Text>
            <Text style={styles.headerCell}>Debit</Text>
            <Text style={styles.headerCell}>Credit</Text>
            <Text style={styles.headerCell}>Amount</Text>
        </View>

        {/* Data */}
        {bookings.map((item) => (
          <View
            key={item.bookingId}
            style={styles.dataRow}
          >
            <Text style={styles.cell}>{item.bookingDate}</Text>
            <Text style={styles.cell}>{item.bookingTime}</Text>
            <Text style={styles.cell}>{item.fullCylinders}</Text>
            <Text style={styles.cell}>{item.emptyCylinders}</Text>
            <Text style={styles.cell}>{item.balanceCylinders}</Text>
            <Text style={styles.cell}>{item.cylinderPrice}</Text>
            <Text style={styles.cell}>{item.debitAmount}</Text>
            <Text style={styles.cell}>{item.creditAmount}</Text>
            <Text style={styles.cell}>{item.balanceAmount}</Text>

          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 50,
    flexDirection: "row",
    backgroundColor: "#2563EB",
  },

  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#D1D5DB",
  },

  headerCell: {
    width: 120,
    padding: 10,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  cell: {
    width: 120,
    padding: 10,
    textAlign: "center",
  },
});
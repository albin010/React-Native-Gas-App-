import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function GasBooking() {
  const [customer, setCustomer] = useState("");
  const [fullCylinders, setBookedCylinders] = useState("");
  const [emptyCylinders, setEmptyCylinders] = useState("");
  const [cylinderPrice, setCylinderPrice] = useState("");
  const [creditAmount, setCreditAmount] = useState("");

  const handleSave = () => {
    const payload = {
      customerId: customer,
      fullCylinders,
      emptyCylinders,
      cylinderPrice,
      creditAmount,
    };

    console.log(payload);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sales</Text>

      <Text style={styles.label}>Customer</Text>
      <TextInput
        style={styles.input}
        placeholder="Select Customer"
        value={customer}
        onChangeText={setCustomer}
      />
      <Text style={styles.label}>Full Cylinders</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={fullCylinders}
        onChangeText={setBookedCylinders}
      />

      <Text style={styles.label}>Empty Cylinders</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={emptyCylinders}
        onChangeText={setEmptyCylinders}
      />


      <Text style={styles.label}>Cylinder Price</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cylinderPrice}
        onChangeText={setCylinderPrice}
      />

      <Text style={styles.label}>Credit Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={creditAmount}
        onChangeText={setCreditAmount}
      />



      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
  },

  button: {
    marginTop: 220,
    backgroundColor: "#2563EB",
    height: 55,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    
  },
});
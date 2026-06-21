import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Customer() {
  const [hotelName, setHotelName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSave = () => {
    const payload = {
      hotelName,
      customerName,
      password,
      phone,
      address,
      city,
      country,
      zipCode,
    };

    console.log(payload);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Registration</Text>

      <Text style={styles.label}>Hotel Name</Text>
      <TextInput
        style={styles.input}
        value={hotelName}
        onChangeText={setHotelName}
        placeholder="Enter Hotel Name"
      />

      <Text style={styles.label}>Customer Name</Text>
      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={setCustomerName}
        placeholder="Enter Customer Name"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter Phone Number"
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        multiline
        value={address}
        onChangeText={setAddress}
        placeholder="Enter Address"
      />

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter City"
      />

      {/* <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="Enter Country"
      /> */}

      <Text style={styles.label}>Zip Code</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={zipCode}
        onChangeText={setZipCode}
        placeholder="Enter Zip Code"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Save Customer
        </Text>
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
    marginBottom: 20,
    marginTop: 20,
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

  textArea: {
    height: 60,
    textAlignVertical: "top",
    paddingTop: 10,
  },

  button: {
    marginTop: 20,
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
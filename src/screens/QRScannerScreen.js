import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/QRScannerScreenStyles";

export default function QRScannerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Scanner Screen (camera here later)</Text>
      <Button title="Go to Place List" onPress={() => navigation.navigate("PlaceList")} />
    </View>
  );
}

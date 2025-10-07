import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles/PlaceListScreenStyles";

export default function PlaceListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List of Shops/Places will appear here</Text>
      <Button title="Go to Directions" onPress={() => navigation.navigate("Directions")} />
    </View>
  );
}

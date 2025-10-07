import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import styles from "../styles/SplashScreenStyles";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("QRScanner");
    }, 125000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text 
        animation="pulse" 
        iterationCount="infinite" 
        style={styles.title}
      >
        Indira
      </Animatable.Text>

      <Animatable.Text 
        animation="fadeInUp" 
        delay={800} 
        style={styles.subtitle}
      >
        Never lost. Always guided.
      </Animatable.Text>
    </View>
  );
}

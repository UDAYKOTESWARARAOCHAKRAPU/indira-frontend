import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import QRScannerScreen from "../screens/QRScannerScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import DirectionsScreen from "../screens/DirectionsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="QRScanner" component={QRScannerScreen} />
      <Stack.Screen name="PlaceList" component={PlaceListScreen} />
      <Stack.Screen name="Directions" component={DirectionsScreen} />
    </Stack.Navigator>
  );
}

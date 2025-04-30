import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {Stack} from "expo-router"
export default function Layout() {
  return (
    <Stack
    screenOptions={{
      headerShown: false
    }}
    >
        <Stack.Screen name="index" options={{
          headerShown:false
        }} />
                <Stack.Screen name="detailCommande" options={{
          headerShown:false
        }} />
      </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

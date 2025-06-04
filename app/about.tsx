import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function About() {
  return (
    <>
      <Stack.Screen options={{ title: "About Page" }} />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>About Screen</Text>
      </View>
    </>
  );
}

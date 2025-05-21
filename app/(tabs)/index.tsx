import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Link href="/about" asChild>
        <Button title="Go to About Page" />
      </Link>
    </View>
  );
};
import { Link, router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>

      <Link href="/about" asChild>
        <Button title="Go to About Page" />
      </Link>

      <View style={{ marginTop: 20 }}>
        <Button
          title="Logout"
          color="red"
          onPress={() => {
            router.replace("/login"); // Navigate back to login screen
          }}
        />
      </View>
    </View>
  );
}

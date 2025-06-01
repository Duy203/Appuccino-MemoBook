import { Link, router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
       
      <Link href="/about" asChild>
        <Button title="Go to About Page" />
      </Link>

     <View style={{ padding: 20 }}>
      <Link href="/GroupContentScreen" asChild>
        <Button title="Go to Group Content Screen Page!" />
      </Link>
    // Diep add Group content Screen section 
      <View style={{ marginTop: 20 }}>
        <Link href="/GroupContentScreen" asChild>
          <Button title="Group Content Screen!" />
        </Link>
      </View>
      

      {/* Duy Link to the camera page */}
      <View>
        <Button
        title="Camera Button"
        onPress={()=> {router.push("/camera")}}/>
      </View>
      

      <View style={{ marginTop: 20 }}>
        <Button
          title="Logout"
          color="red"
          onPress={() => {
            router.replace("/login");
          }}
        />
      </View>
    </View>
    </View>
  );
}

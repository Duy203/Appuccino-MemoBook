import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
<<<<<<< HEAD
import { useUser } from "../../contexts/UserContexts";
=======
import { useUser } from '../contexts/UserContext';
>>>>>>> origin/main


export default function Profile() {
  const router = useRouter();
<<<<<<< HEAD
  const { user } = useUser?.() || {}; // gracefully fallback if not using context
  console.log("Current user from context:",user);
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
=======
  const { user, setUser } = useUser();

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={() => router.push('/')}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
>>>>>>> origin/main


return (
  <View style={[styles.container, { backgroundColor: theme.background }]}>
    {/* Back Arrow */}
    <TouchableOpacity style={styles.backArrow} onPress={() => router.push("/")}>
      <Ionicons name="arrow-back-outline" size={24} color={theme.icon} />
    </TouchableOpacity>

    {/* Profile Image */}
    <Image
      source={require("@/assets/images/profilestock.png")}
      style={styles.avatar}
    />

    {/* User Info */}
    <Text style={[styles.name, { color: theme.text }]}>
      {user?.username || "Jon Doe"}
    </Text>
    <Text style={[styles.username, { color: theme.icon }]}>
      @{user?.username || "jondoe"}
    </Text>

    {/* Separator */}
    <View style={[styles.separator, { backgroundColor: theme.icon }]} />

    {/* Menu Items */}
    <TouchableOpacity style={styles.menuitem}>
      <Ionicons name="settings-outline" size={24} color={theme.icon} />
      <Text style={[styles.menutext, { color: theme.text }]}>Setting</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuitem}>
      <FontAwesome5 name="user-friends" size={24} color={theme.icon} />
      <Text style={[styles.menutext, { color: theme.text }]}>Friends</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuitem} onPress={() => router.push("/my-photo")}>
      <Ionicons name="image" size={24} color={theme.icon} />
      <Text style={[styles.menutext, { color: theme.text }]}>All My Photos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuitem}>
      <Entypo name="info-with-circle" size={24} color={theme.icon} />
      <Text style={[styles.menutext, { color: theme.text }]}>About</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.menuitem} onPress={() => router.push("/explore")}>
      <Ionicons name="compass-sharp" size={24} color={theme.icon} />
      <Text style={[styles.menutext, { color: theme.text }]}>Explore</Text>
    </TouchableOpacity>

    {/* Logout */}
    <View style={{ marginTop: 20 }}>
      <Button
        title="Logout"
        color="red"
        onPress={() => {
          router.replace("/login");
        }}
      />
<<<<<<< HEAD
=======

      {/* Dynamic User Info */}
      <Text style={styles.name}>{user?.username ?? 'Guest'}</Text>
      <Text style={styles.username}>@{user?.username ?? 'guest'}</Text>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuitem}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.menutext}>Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuitem}>
        <FontAwesome5 name="user-friends" size={24} color="black" />
        <Text style={styles.menutext}>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuitem}>
        <Entypo name="info-with-circle" size={24} color="black" />
        <Text style={styles.menutext}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuitem} onPress={() => router.push('/explore')}>
        <Ionicons name="compass-sharp" size={24} color="black" />
        <Text style={styles.menutext}>Explore</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <View style={{ marginTop: 20 }}>
        <Button
          title="Logout"
          color="red"
          onPress={() => {
            router.replace("/login");
          }}
        />
      </View>
>>>>>>> origin/main
    </View>
  </View>
);}


const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    alignItems: "center",
=======
    alignItems: 'center',
>>>>>>> origin/main
    paddingTop: 60,
  },
  backArrow: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
<<<<<<< HEAD
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
  },
  username: {
    fontSize: 14,
    marginBottom: 20,
  },
  separator: {
    width: "90%",
    height: 2,
    marginVertical: 20,
  },
  menuitem: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    paddingVertical: 12,
  },
  menutext: {
    marginLeft: 15,
    fontSize: 18,
  },
=======
    marginVertical: 20
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20
  },
  separator: {
    width: "90%",
    backgroundColor: '#000',
    height: 2,
    marginVertical: 20
  },
  menuitem: {
    flexDirection: 'row',
    alignItems: "center",
    width: "80%",
    paddingVertical: 12
  },
  menutext: {
    marginLeft: 15,
    fontSize: 18
  }
>>>>>>> origin/main
});

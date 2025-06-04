import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backArrow} onPress={()=>router.push('/')}>
        <Ionicons name="arrow-back-outline" size={24} color="black"/>
      </TouchableOpacity>

      {/* Profile Image */}
      <Image
        source={require('@/assets/images/profilestock.png')}
        style={styles.avatar}
      />

      {/* User Info */}
      <Text style={styles.name}>Jon Doe</Text>
      <Text style={styles.username}>@jondoe</Text>

      {/*Separate Line */}
      <View style={styles.separator}/>

      {/*Menu */}

      <TouchableOpacity style={styles.menuitem}>
        <Ionicons name="settings-outline" size={24} color="black"/>
        <Text style={styles.menutext}>Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuitem}>
        <FontAwesome5 name="user-friends" size={24} color="black"/>
        <Text style={styles.menutext}>Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuitem}>
        <Entypo name="info-with-circle" size={24} color="black"/>
        <Text style={styles.menutext}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuitem}  onPress={()=>router.push('/explore')}>
        <Ionicons name="compass-sharp" size={24} color="black"/>
        <Text style={styles.menutext}>Explore</Text>
      </TouchableOpacity>

      {/*Added logout button to Profile Screen */}
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
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    paddingTop:60,
  },
  backArrow:{
    position:"absolute",
    top:60,
    left:20,
  },
  avatar:{
     width:100,
     height:100,
     borderRadius:50,
     marginVertical:20
  },
  name:{
    fontSize:20,
    fontWeight:200
  },
  username:{
    fontSize:14,
    color:'#888',
    marginBottom:20
  },
  separator:{
    width:"90%",
    backgroundColor:'#000',
    height:2,
    marginVertical:20
  },
  menuitem:{
    flexDirection: 'row',
    alignItems:"center",
    width:"80%",
    paddingVertical:12
  },
  menutext:{
    marginLeft:15,
    fontSize:18
  }
})

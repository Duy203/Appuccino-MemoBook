import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



export default function CameraScreen(){
    const router = useRouter();
    return(
         <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.avatar}><Text style={styles.avatarText}>A</Text></View>
          <View>
            <Text style={styles.groupTitle}>Group 1</Text>
            <Text style={styles.groupBio}>Insert Bio</Text>
          </View>
        </View>

        <View style={styles.placeholder}>
          <Ionicons name="shapes" size={64} color="#bbb" />
        </View>

        <Text style={styles.topicTitle}>Group’s Daily Topic</Text>
        <Text style={styles.topicDescription}>Topic Description</Text>
        <Text style={styles.policies}>Group’s policies</Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.outlinedBtn}>
            <Text style={styles.outlinedBtnText}>View Submission</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filledBtn}>
            <Text style={styles.filledBtnText}>Submit Photo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.cameraButton} onPress={() => router.push('/takephoto')}>
        <Ionicons name="camera-outline" size={32} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f7f7f7' },
  back: { position: 'absolute', top: 50, left: 20, zIndex: 10 },
  card: {
    marginTop: 100,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: {
    backgroundColor: '#e0d6f9',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: { fontWeight: 'bold', color: '#666' },
  groupTitle: { fontWeight: 'bold', fontSize: 16 },
  groupBio: { color: '#666' },
  placeholder: {
    height: 100,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  topicTitle: { fontWeight: 'bold', fontSize: 16 },
  topicDescription: { color: '#444' },
  policies: { color: '#666', marginVertical: 8 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  outlinedBtn: {
    borderColor: '#7f63b7',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  outlinedBtnText: { color: '#7f63b7' },
  filledBtn: {
    backgroundColor: '#7f63b7',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  filledBtnText: { color: 'white' },
  cameraButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 50,
    elevation: 3,
  },
});

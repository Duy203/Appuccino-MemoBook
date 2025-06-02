import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GroupScreen() {

  const { id } = useLocalSearchParams();

  // Safely convert id to string (handle undefined or array)
  const groupId = typeof id === 'string' ? id : Array.isArray(id) ? id[0] : '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group ID: {groupId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

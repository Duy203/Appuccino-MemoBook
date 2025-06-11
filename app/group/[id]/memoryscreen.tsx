import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// Mock "winning photos" data
const mockPhotos = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  user: `User ${index + 1}`,
  topic: `Topic ${index + 1}`,
  imageUri: 'https://via.placeholder.com/300x200?text=Photo+' + (index + 1),
}));

export default function MemoryScreen() {
  const { id } = useLocalSearchParams();
  const groupId = typeof id === 'string' ? id : Array.isArray(id) ? id[0] : '';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Memory Book - Group {groupId}</Text>

      <FlatList
        data={mockPhotos.slice(0, 20)} // Max 20 photos
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <Image source={{ uri: item.imageUri }} style={styles.photo} />
            <Text style={styles.caption}>User: {item.user}</Text>
            <Text style={styles.caption}>Topic: {item.topic}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f0e3', // soft book-like background
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  page: {
    width: Dimensions.get('window').width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ccc',
  },
  caption: {
    fontSize: 16,
    marginBottom: 4,
  },
});

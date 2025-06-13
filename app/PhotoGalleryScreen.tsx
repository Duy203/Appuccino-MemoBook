import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const API_URL = 'http://10.8.10.183:3000'; // 🔁 Replace with your backend IP

interface Photo {
  _id: string;
  image: string;
  createdAt: string;
}

const PhotoGalleryScreen = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos`);
        setPhotos(response.data);
      } catch (err) {
        console.error('Failed to load photos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Saved Photos</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {photos.map(photo => (
          <Image
            key={photo._id}
            source={{ uri: `data:image/jpg;base64,${photo.image}` }}
            style={styles.image}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  scroll: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    margin: 8,
    borderRadius: 12,
  },
  title: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
});

export default PhotoGalleryScreen;

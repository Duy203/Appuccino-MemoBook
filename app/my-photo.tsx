import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { useUser } from '../contexts/UserContexts';

const API_ROOT = 'http://10.0.0.216:3000';

export default function MyPhotosScreen() {
    interface Photo{
        _id:string;
        image: string;
        username: string;
        createdAt:string;
    }
  const { user } = useUser();
  const [photos, setPhotos] = useState<Photo[]>([]);
  

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await axios.get(`${API_ROOT}/my-photo/${user?.username}`);
        setPhotos(res.data);
      } catch (err) {
        console.error('Failed to load photos', err);
      }
    };

    if (user?.username) fetchPhotos();
  }, [user]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Photos</Text>
      {photos.map((photo, index) => (
        <Image
          key={index}
          source={{ uri: `data:image/png;base64,${photo.image}` }}
          style={styles.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 12,
  },
});

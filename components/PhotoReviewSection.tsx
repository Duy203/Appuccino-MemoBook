import { Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import { CameraCapturedPicture } from 'expo-camera';
import { router } from 'expo-router';
import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useUser } from '../contexts/UserContexts';

interface PhotoPreviewSectionProps {
  photo: CameraCapturedPicture;
  handleRetakePhoto: () => void;
}

const API_URL = "http://192.168.2.2:3000";

const PhotoPreviewSection: React.FC<PhotoPreviewSectionProps> = ({
  photo,
  handleRetakePhoto,
}) => {
  const {user}= useUser();

  const handleSavePhoto = async () => {
    if (!photo?.base64) {
      Alert.alert('Error', 'No base64 image data found.');
      return;
    }
    if(!user?.username){
      Alert.alert('Error', 'User not found in context')
      return;
    }

    const cleanBase64 = photo.base64.replace(/\s/g, '');

    try {
      const response = await axios.post(`${API_URL}/upload-photo`, {
        image: cleanBase64,
        username: user.username,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Photo saved to MongoDB!',[
            {
                text: 'OK',
                onPress : ()=> router.push('/PhotoGalleryScreen'),
            }
        ]);
      } 
      else {
        Alert.alert('Error', 'Unexpected response from server.');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Upload Failed', 'Could not save the photo.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Image
          style={styles.previewContainer}
          source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
          <Fontisto name="trash" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSavePhoto}>
          <Fontisto name="save" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 15,
    padding: 1,
    width: '95%',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewContainer: {
    width: '95%',
    height: '85%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PhotoPreviewSection;

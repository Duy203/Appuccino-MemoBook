import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function GroupScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const groupId = typeof id === 'string' ? id : Array.isArray(id) ? id[0] : '';
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Group Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: theme.tabIconSelected }]}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View>
            <Text style={[styles.groupName, { color: theme.text }]}>Group {groupId}</Text>
            <Text style={[styles.bioText, { color: theme.icon }]}>Insert Bio</Text>
          </View>
        </View>

        {/* Image Placeholder */}
        <View style={styles.imagePlaceholder}>
          <View style={styles.shapeRow}>
            <View style={styles.triangle} />
          </View>
          <View style={styles.shapeRow}>
            <View style={styles.square} />
            <View style={styles.circle} />
          </View>
        </View>

        {/* Group Info */}
        <View style={styles.info}>
          <Text style={[styles.topicTitle, { color: theme.text }]}>Group’s Daily Topic</Text>
          <Text style={[styles.topicDescription, { color: theme.icon }]}>Topic Description</Text>
          <Text style={[styles.policies, { color: theme.icon }]}>Group’s policies</Text>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.outlineButton, { borderColor: theme.tint }]}
              onPress={() =>
                router.push({
                  pathname: '/group/[id]/content',
                  params: { id: groupId },
                })
              }
            >
              <Text style={[styles.outlineButtonText, { color: theme.tint }]}>View Submissions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.filledButton, { backgroundColor: theme.tint }]}
              onPress={() =>
                router.push({
                  pathname: '/group/[id]/memoryscreen',
                  params: { id: groupId },
                })
              }
            >
              <Text style={styles.filledButtonText}>Memory Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Camera Button */}
      <TouchableOpacity
        style={[styles.cameraButton, { backgroundColor: theme.tint }]}
        onPress={() => router.push('/takephoto')}
      >
        <Ionicons name="camera-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

// --- Screen Options for dynamic title ---
export function getScreenOptions({ params }: { params: { id: string } }) {
  return {
    title: `Group ${params.id}`,
  };
}

// --- Styles ---
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bioText: {
    fontSize: 12,
  },
  imagePlaceholder: {
    backgroundColor: '#d3d3d3',
    height: screenWidth * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shapeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 4,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 35,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#555',
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#555',
    marginRight: 16,
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: '#555',
    borderRadius: 15,
  },
  info: {
    padding: 16,
  },
  topicTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 12,
    marginBottom: 4,
  },
  policies: {
    fontSize: 12,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outlineButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  outlineButtonText: {
    fontSize: 12,
  },
  filledButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filledButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  cameraButton: {
    alignSelf: 'center',
    padding: 16,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
  },
});

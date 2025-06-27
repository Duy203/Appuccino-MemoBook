import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Post = {
  id: string;
  user?: string;
  location?: string;
  rating: number;
};

const initialData: Post[] = Array.from({ length: 6 }, (_, index) => ({
  id: (index + 1).toString(),
  user: '',
  location: '',
  rating: 0,
}));

const GroupContentScreen = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<Post[]>(initialData);
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const handleRate = (postId: string, rating: number) => {
    const updatedData = data.map((post) =>
      post.id === postId ? { ...post, rating } : post
    );
    setData(updatedData);
  };

  const renderStars = (rating: number, postId: string) => {
    return (
      <View style={styles.starRow}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleRate(postId, star)}
          >
            <Text style={star <= rating ? styles.filledStar : styles.emptyStar}>
              ★
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <View style={[styles.header, { backgroundColor: theme.accent + '33' }]}>
        <View style={[styles.avatar, { backgroundColor: theme.accent }]} />
        <View>
          <Text style={[styles.user, { color: theme.text }]}>
            {item.user || 'Anonymous'}
          </Text>
          <Text style={[styles.location, { color: theme.icon }]}>
            {item.location || 'Unknown location'}
          </Text>
        </View>
      </View>

      <View style={styles.imagePlaceholder}></View>

      <View style={[styles.textBlock, { backgroundColor: theme.background }]}>
        <Text style={[styles.rateLabel, { color: theme.text }]}>Rate:</Text>
        {renderStars(item.rating, item.id)}
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.groupHeader}>
        <Text style={[styles.groupTitle, { color: theme.text }]}>Group {id}</Text>
        <Text style={[styles.addTopic, { color: theme.tint }]}>Add Topic on Page</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addTopic: {
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    borderRadius: 12,
    marginTop: 16,
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
    marginRight: 12,
  },
  user: {
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
  },
  imagePlaceholder: {
    backgroundColor: '#dcdcdc',
    height: Dimensions.get('window').width * 0.5,
  },
  textBlock: {
    padding: 12,
  },
  rateLabel: {
    fontWeight: '600',
    marginBottom: 4,
  },
  starRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  filledStar: {
    color: '#FFD700',
    fontSize: 20,
    marginHorizontal: 2,
  },
  emptyStar: {
    color: '#cccccc',
    fontSize: 20,
    marginHorizontal: 2,
  },
});

export default GroupContentScreen;

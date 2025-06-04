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
  const [data, setData] = useState<Post[]>(initialData);

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
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar} /> {/* Blank avatar */}
        <View>
          <Text style={styles.user}>{item.user || 'Anonymous'}</Text>
          <Text style={styles.location}>{item.location || 'Unknown location'}</Text>
        </View>
      </View>

      <View style={styles.imagePlaceholder} />

      <View style={styles.textBlock}>
        <Text style={styles.rateLabel}>Rate:</Text>
        {renderStars(item.rating, item.id)}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.groupHeader}>
        <Text style={styles.groupTitle}>Group 1</Text>
        <Text style={styles.addTopic}>Add Topic on Page</Text>
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
    backgroundColor: '#f2f2f2',
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
    color: '#6a1b9a',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: 'transparent', // blank instead of colored
  },
  user: {
    fontWeight: 'bold',
  },
  location: {
    color: '#555',
  },
  imagePlaceholder: {
    backgroundColor: '#dcdcdc',
    height: Dimensions.get('window').width * 0.5,
  },
  textBlock: {
    padding: 12,
    backgroundColor: '#f6f6f6',
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

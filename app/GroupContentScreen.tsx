import React from 'react';
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
  user: string;
  location: string;
  caption: string;
  description: string;
};

const data: Post[] = [
  {
    id: '1',
    user: 'Jon Doe',
    location: 'Location',
    caption: 'Caption',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    id: '2',
    user: 'Jane Doe',
    location: 'location',
    caption: 'Caption',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

const GroupContentScreen = () => {
  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>A</Text>
        </View>
        <View>
          <Text style={styles.user}>{item.user}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>

      <View style={styles.imagePlaceholder} />

      <View style={styles.textBlock}>
        <Text style={styles.caption}>{item.caption}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonOutline}>
            <Text style={styles.outlineText}>Up Vote</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFilled}>
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.groupTitle}>Group 1</Text>
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
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 0,
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
    backgroundColor: '#d1c4e9',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#000',
    fontWeight: 'bold',
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
  caption: {
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: '#666',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: '#6a1b9a',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
  },
  outlineText: {
    color: '#6a1b9a',
  },
  buttonFilled: {
    backgroundColor: '#6a1b9a',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  buttonText: {
    color: '#fff',
  },
});

export default GroupContentScreen;

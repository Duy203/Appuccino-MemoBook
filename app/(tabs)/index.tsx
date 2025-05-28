import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

type Group = {
  id: string;
  name: string;
  topic: string;
};

const mockGroups = [
  { id: '1', name: 'Art Club', topic: 'Curly haired dog' },
  { id: '2', name: 'Nature Squad', topic: 'Peaceful places' },
  { id: '3', name: 'Fashionistas', topic: 'Glamorous outfits' },
  { id: '4', name: 'Thinkers', topic: 'Abstract art' },
];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const filteredGroups = mockGroups.filter(group =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  const goToGroup = (groupId: string) => {
    router.push({
      pathname: '/group/[id]',
      params: { id: groupId },
    });
  };

  const renderGroup = ({ item }: { item: Group }) => (
    <TouchableOpacity style={styles.card} onPress={() => goToGroup(item.id)}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupTopic}>{item.topic}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Groups"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredGroups}
        keyExtractor={(item) => item.id}
        renderItem={renderGroup}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  searchBar: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f7f2ff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: '#c29fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  groupTopic: {
    color: '#555',
    fontSize: 13,
  },
});

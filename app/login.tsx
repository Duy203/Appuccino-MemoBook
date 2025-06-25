import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useUser } from '../contexts/UserContexts'; // <- path matches new location

const API_URL = 'http://10.0.0.216:3000';                  // or process.env.EXPO_PUBLIC_API_URL

export default function LoginScreen() {
  const router = useRouter();
  const { setUser } = useUser();                           // <- call hook INSIDE component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Missing Fields', 'Please enter both username and password');
      return;
    }

    try {
      const res = await axios.post(`${API_URL}/login`, { username, password });

      if (res.status === 200) {
        setUser(res.data.user);                            // store user from backend
        Alert.alert('Welcome!', 'Login Successful');
        router.replace('/');                               // go to home/tabs
      }
    } catch (err: any) {
      Alert.alert('Login Failed', err?.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={() => router.push('/create')} />
        <Button title="Sign In" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' },
  title:     { fontSize: 28, marginBottom: 24, textAlign: 'center' },
  input:     { height: 48, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 12,
               marginBottom: 16, borderRadius: 8 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, marginTop: 16 },
});

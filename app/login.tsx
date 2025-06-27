import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
<<<<<<< HEAD
import { useUser } from '../contexts/UserContexts'; // <- path matches new location

const API_URL = 'http://192.168.2.2:3000';                  // or process.env.EXPO_PUBLIC_API_URL
=======
import { useUser } from './contexts/UserContext'; // adjust path if needed

const API_URL = 'http://192.168.56.1:3001/api/users';
>>>>>>> origin/main

export default function LoginScreen() {
  const router = useRouter();
  const { setUser } = useUser();                           // <- call hook INSIDE component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

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
=======
  const { user, setUser } = useUser();

  const handleRegister = async () => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log('Register response:', data);

      if (!res.ok) {
        Alert.alert('Register Failed', data.message || 'Something went wrong');
        return;
      }

      setUser({ username }); // Sets user context
      Alert.alert('Register Success', 'You are now registered and logged in!');
      router.replace('/');
    } catch (error) {
      console.error('Register error:', error);
      Alert.alert('Error', 'Registration failed.');
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log('Login response:', data);

      if (!res.ok) {
        Alert.alert('Login Failed', data.message || 'Invalid credentials');
        return;
      }

      setUser({ username }); // Sets user context
      Alert.alert('Login Success', 'Welcome back!');
      router.replace('/');
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Login failed.');
>>>>>>> origin/main
    }
  };

  return (
<<<<<<< HEAD
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.tint }]}>Welcome to Memory Book</Text>
=======
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
>>>>>>> origin/main

      <TextInput
        style={[styles.input, { borderColor: theme.tint, color: theme.text }]}
        placeholder="Username"
        placeholderTextColor={theme.icon}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={[styles.input, { borderColor: theme.tint, color: theme.text }]}
        placeholder="Password"
        placeholderTextColor={theme.icon}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
<<<<<<< HEAD
        <View style={styles.buttonWrapper}>
          <Button title="Register" color={theme.tint} onPress={() => router.push('/create')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Sign In" color={theme.tint} onPress={handleLogin} />
        </View>
=======
        <Button title="Register" onPress={handleRegister} />
        <Button title="Sign In" onPress={handleLogin} />
>>>>>>> origin/main
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 2,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
});

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useUser } from '../contexts/UserContexts'; // <- path matches new location

const API_URL = 'http://192.168.2.2:3000';                  // or process.env.EXPO_PUBLIC_API_URL

export default function LoginScreen() {
  const router = useRouter();
  const { setUser } = useUser();                           // <- call hook INSIDE component
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.tint }]}>Welcome to Memory Book</Text>

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
        <View style={styles.buttonWrapper}>
          <Button title="Register" color={theme.tint} onPress={() => router.push('/create')} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Sign In" color={theme.tint} onPress={handleLogin} />
        </View>
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

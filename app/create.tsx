import axios from 'axios';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const API_URL = "http://10.0.0.216:3000";
export default function CreatePage(){
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const handleCreateAccount = async () => {
        if(!username || !password){
            Alert.alert('Error', 'Username and Password are required');
            return;
        }

        try{
            const response = await axios.post(`${API_URL}/create-account`,{
                username,
                password,
            });

            if (response.status === 200){
                Alert.alert('Success','Account Created!');
                setUserName('');
                setPassword('');
            }
        }
        catch (err:any){
            Alert.alert('Error', err?.response?.data?.message || 'Something Went Wrong')
        }
    };

    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create Your Account</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder='Username'
                value = {username}
                onChangeText={setUserName}
                autoCapitalize='none'
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
                value = {password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button_outline} onPress={handleCreateAccount}>
                <Text style={styles.button_text}>Create Account!</Text>
            </TouchableOpacity>

            
        </KeyboardAvoidingView>

        
    )

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize :24,
        marginBottom : 24,
        textAlign : 'center'
    },
    input : {
        borderWidth: 1,
        borderColor: '#999',
        padding:10,
        marginBottom: 50,
        borderRadius: 5,
        paddingBottom: 20,
    },

    button_outline : {
        alignItems:'center',
        borderWidth: 5,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ffff'
    },
    
    button_text : {
        fontWeight: 'bold',
        fontSize: 15,

    },
    header : { 
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 80,
        alignItems:'center'

    }
})

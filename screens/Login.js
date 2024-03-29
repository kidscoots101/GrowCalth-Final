import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import {auth} from '../firebase'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoggedIn = async () => {
            const userToken = await AsyncStorage.getItem("userToken");
            if (userToken) {
                navigation.replace("Home");
            }
        };
        checkLoggedIn();
    }, [navigation]);

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(async (userCredentials) => {
                const user = userCredentials.user;
                console.log("Logged in with:", user.email);
                await AsyncStorage.setItem("userToken", user.uid);
                await AsyncStorage.setItem("userEmail", user.email);
                navigation.replace("Home");
            })
            .catch((error) => alert(error.message));
    };
  return (
    <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{fontWeight: '900', fontSize: 40}}>The House You Need.</Text>
        <TextInput
          placeholder="Email (School Email)"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
         <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text>
      Don't have an account yet?{' '}
      <TouchableOpacity onPress={() => navigation.replace("Register")}>
        <Text style={{ textDecorationLine: 'underline', color: '#DB5461', fontWeight: 'bold' }}>Sign up</Text>
      </TouchableOpacity>
    </Text>
    <Text>Your house is waiting for ya!</Text>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    input: {
        width: '80%',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#DB5461",
        width: "80%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
      },
    buttonText: {
        color: 'white'
    }

})
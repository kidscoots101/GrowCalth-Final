import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import DropDownPicker from "react-native-dropdown-picker";
  import { useNavigation } from "@react-navigation/native";
  import { auth, firebase } from "../firebase";
  // import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/database";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const Register = () => {
    const allowedEmailDomains = [
      "s2020.ssts.edu.sg",
      "s2021.ssts.edu.sg",
      "s2022.ssts.edu.sg",
      "s2023.ssts.edu.sg",
      "s2024.ssts.edu.sg",
      "s2025.ssts.edu.sg",
      "s2026.ssts.edu.sg",
      "sst.edu.sg",
    ];
    const handleSignUp = () => {
      const emailDomain = email.split("@")[1];
      const dataRef = firebase.firestore().collection("users");
      if (!allowedEmailDomains.includes(emailDomain)) {
        alert(
          "This domain is not allowed. Please enter your SST school email account",
        );
        return;
      }
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
  
          // Create an object to store user data
          const userData = {
            email: user.email,
            password: password,
            house: house,
            points: 0,
            steps: 0,
          };
          dataRef
            .add(userData)
            .then(() => {
                AsyncStorage.setItem('userToken', JSON.stringify(userData));
              navigation.navigate("Home");
            })
            .catch((error) => {
              alert(error);
            });
        });
    };
    useEffect(() => {
        AsyncStorage.getItem('userToken')
          .then((data) => {
            if (data) {
              const userData = JSON.parse(data);
              setEmail(userData.email);
              setHouse(userData.house);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [house, setHouse] = useState("");
    const [items, setItems] = useState([
      { label: "Blue", value: "Blue" },
      { label: "Black", value: "Black" },
      { label: "Yellow", value: "Yellow" },
      { label: "Green", value: "Green" },
      { label: "Red", value: "Red" },
    ]);
    const navigation = useNavigation();
  
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "900", fontSize: 40 }}>
          Join the House Today.
        </Text>
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
        <DropDownPicker
          placeholder="Select your house"
          placeholderStyle={{
            color: "grey",
            fontWeight: "bold",
          }}
          style={{ top: 10, width: "80%", alignSelf: "center" }}
          open={open}
          value={house}
          items={items}
          setOpen={setOpen}
          setValue={setHouse}
          setItems={setItems}
        />
        <TouchableOpacity
          onPress={() => {
            // handledomain();
            handleSignUp();
          }}
          style={[
            styles.button,
            styles.buttonOutline,
            { marginTop: 20, width: "80%" },
          ]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
        <Text>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#DB5461",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </Text>
      </KeyboardAvoidingView>
    );
  };
  
  export default Register;
  
  const styles = StyleSheet.create({
    input: {
      width: "80%",
      backgroundColor: "#f0f0f0",
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      fontSize: 16,
    },
    button: {
      backgroundColor: "#DB5461",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonOutline: {
      backgroundColor: "#DB5461",
      marginTop: 5,
      borderColor: "#DB5461",
      borderWidth: 2,
    },
    buttonOutlineText: {
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: 16,
    },
  });
  
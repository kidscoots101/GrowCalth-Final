import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import firebase from "firebase/compat";
import { auth } from "../../firebase";

export default class AccountInfo extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }

  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword)
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(this.state.newPassword)
          .then(() => {
            Alert.alert("Password was changed");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          flexDirection: "column",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#CEE5D0",
            height: 30,
            marginTop: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: -33,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 20, left: 6, fontWeight: "600" }}>
            E M A I L :
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontWeight: "600", paddingHorizontal: 20, fontSize: 22 }}
          >
            {auth.currentUser?.email}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F7826F",
            height: 30,
            marginTop: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: -33,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, left: 6, fontWeight: "600" }}>
            C H A N G E P A S S W O R D
          </Text>
        </View>
        <TextInput
          style={styles.textInput}
          value={this.state.currentPassword}
          placeholder="Current Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ currentPassword: text });
          }}
        />

        <TextInput
          style={styles.textInput}
          value={this.state.newPassword}
          placeholder="New Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({ newPassword: text });
          }}
        />
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
              backgroundColor: "#DB5461",
            }}
            onPress={this.onChangePasswordPress}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
              Change Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 20,
    padding: 10,
    height: 40,
    alignSelf: "stretch",
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
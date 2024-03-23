import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Switch,
  StyleSheet,
  Alert,
} from "react-native";
// import Preferences from "../components/Preferences";
// import Health from "../components/Health";
// import General from "../components/General";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
// import Icond from "react-native-vector-icons/AntDesign";
// import Iconse from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AboutUs from "./settingsnav/AboutUs";
// import HealthInfo from "./settingsnav/HealthInfo";
import MoreQuotes from "./settingsnav/MoreQuotes";
import AccountInfo from "./settingsnav/AccountInfo";
import firebase from "firebase/compat";
import House from "./settingsnav/House";
import { auth } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

const Settings = (props) => {
  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to Logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => {
          auth
            .signOut()
            .then(() => {
              navigation.replace("Login");
              AsyncStorage.removeItem('userToken')
              .then(() => {
                navigation.replace("Login");
              })
              .catch((error) => alert(error.message));
            })
            .catch((error) => alert(error.message));
        },
      },
    ]);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();

  const userEmail = auth.currentUser?.email

  return (
    <SafeAreaView style={{ backgroundColor: "#f3f2f3" }}>
      <View style={{ backgroundColor: "#f3f2f3" }}>
        <ScrollView>
          <Text
            style={{
              marginHorizontal: 15,
              fontWeight: "bold",
              fontSize: 40,
              top: 25,
              marginBottom: 20,
            }}
          >
            Settings
          </Text>
          <Text style={styles.subTitle}>Setting the scene...</Text>
          <View style={{ flex: 0.5, paddingHorizontal: 33 }}>
            <View>
              <View
                style={{
                  backgroundColor: "#F7826F",
                  height: 30,
                  marginTop: 20,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: -33,
                  marginBottom: 10
                }}
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>
                  ACCOUNT{" "}
                </Text>
              </View>
              {/* <View
                style={{
                  width: windowWidth - 40,
                  height: 125,
                  borderRadius: 10,
                  borderColor: "black",
                  borderWidth: 1.23,
                  marginTop: 15,
                  marginLeft: -10,
                }}
              > */}
             
             <TouchableOpacity
  style={{
    width: windowWidth - 41,
    backgroundColor: "white",
    height: '80%',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 3
  }}
  onPress={() => navigation.navigate("Account Info")}
>
  {/* Second Piece of code */}
  <View style={{
    flexDirection: 'row',
    alignItems: 'center', 
  }}>
    <View style={{
      backgroundColor: '#4169E1',
      height: '90%',
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50, 
      marginLeft: 10,
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
      }}>
        {userEmail[0].toUpperCase()}
      </Text>
    </View>
    <View style={{
      width: '80%',
      marginLeft: 10,
    }}>
      <Text style={{
        fontWeight: '900',
        fontSize: 18,
        marginBottom: 4, // Add some space between the two Text components
      }}>
        {userEmail}
      </Text>
      <Text>Tap to view account information.</Text>
    </View>
  </View>
</TouchableOpacity>

                {/* <TouchableOpacity style={{width: 377, backgroundColor: 'white', height: 62, borderColor: 'black', borderTopWidth: 1.23, borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
              {/* Third Piece of code */}

                {/* </TouchableOpacity> */}
              </View>
            </View>
          {/* </View> */}
          {/* Health */}
          <View>
          </View>
          {/* Preferences */}
          <View
            style={{
              backgroundColor: "#CEE5D0",
              height: 30,
              marginTop: 20,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: -33,
              marginTop: 100
            }}
          >
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              A D M I N
            </Text>
          </View>

          
          <TouchableOpacity 
          onPress={() => navigation.navigate("AboutUs")}
          style={[styles.button, {
            elevation: 3
          }]}>
              <Text style={styles.buttonText}>Acknowledgements</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} style={[styles.button, {marginTop: 30,elevation: 3}]}>
              <Text style={[styles.buttonText, {color: 'red'}]}>Sign out</Text>
            </TouchableOpacity>

          {/* COPYRIGHTS */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 30,
              paddingBottom: 100,
            }}
          >
            <Text style={{ fontSize: 10, color: "#C1CAD6" }}>
              Copyright GrowCalth © 2024 All rights Reserved{" "}
            </Text>
            <Text style={{ fontSize: 10, color: "#C1CAD6" }}>
              Singapore, Singapore City{" "}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const Stack = createNativeStackNavigator();
export function Stackz() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="More Quotes" component={MoreQuotes} />
      {/* <Stack.Screen name="Health Info" component={HealthInfo} /> */}
      <Stack.Screen name="Account Info" component={AccountInfo} />
      {/* <Stack.Screen name="House Info" component={House} /> */}
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
    height: '8%',
    alignSelf: 'center'
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 14,
  },
  subTitle: {
    color: "#C1CAD6",
    marginTop: 6,
    marginHorizontal: 14,
  },
});
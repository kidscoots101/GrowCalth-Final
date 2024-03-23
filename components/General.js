import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Settings,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icond from "react-native-vector-icons/AntDesign";
import AboutUs from "../screens/settingsnav/AboutUs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const General = () => {
  const navigation = useNavigation();
  return (
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
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          G E N E R A L{" "}
        </Text>
      </View>
      <View
        style={{
          width: 380,
          height: 125,
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 1.23,
          marginTop: 15,
          marginLeft: -10,
        }}
      >
        <TouchableOpacity
          style={{
            width: 377,
            backgroundColor: "#",
            height: 60,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderColor: "black",
            borderBottomWidth: 1.23,
          }}
          onPress={() => navigation.navigate("AboutUs")}
        >
          {/* First Piece of code */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icond
              name="questioncircleo"
              size={30}
              style={{ paddingHorizontal: 10 }}
            />
            <Text
              style={{
                paddingHorizontal: 5,
                fontSize: 16.6,
                fontWeight: "600",
              }}
            >
              About us
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 377,
            backgroundColor: "white",
            height: 60,
            borderRadius: 10,
          }}
        >
          {/* Second Piece of code */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="quote-left"
              size={23}
              color="black"
              style={{ paddingHorizontal: 10 }}
            />
            <Text
              style={{
                paddingHorizontal: 5,
                fontSize: 16.6,
                fontWeight: "600",
              }}
            >
              More Quotes
            </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{width: 377, backgroundColor: 'white', height: 62, borderColor: 'black', borderTopWidth: 1.23, borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
              {/* Third Piece of code */}

        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default General;

const styles = StyleSheet.create({});

const Stack = createNativeStackNavigator();
export function Stackz() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

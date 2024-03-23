import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icond from "react-native-vector-icons/AntDesign";
import Iconse from "react-native-vector-icons/Ionicons";

const Health = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#A0C4E2",
          height: 30,
          marginTop: 20,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: -33,
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center" }}>H E A L T H</Text>
      </View>
      <View
        style={{
          width: 380,
          height: 185,
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 1.23,
          marginTop: 15,
          marginLeft: 23,
        }}
      >
        <TouchableOpacity
          style={{
            width: 377,
            backgroundColor: "white",
            height: 60,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderColor: "black",
            borderBottomWidth: 1.23,
          }}
        >
          {/* First Piece of code */}
          <View>{/* <Icon name="heartbeat" size={30} color="red"/> */}</View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="heartbeat"
              size={25}
              color="red"
              style={{ paddingHorizontal: 10 }}
            />
            <Text
              style={{
                paddingHorizontal: 5,
                fontSize: 16.6,
                fontWeight: "600",
              }}
            >
              Health Info
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 377, backgroundColor: "white", height: 60 }}
        >
          {/* Second Piece of code */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icons
              name="food-drumstick-off"
              size={25}
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
              Dietary Restrictions
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 377,
            backgroundColor: "white",
            height: 62,
            borderColor: "black",
            borderTopWidth: 1.23,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          {/* Third Piece of code */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="child"
              size={32}
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
              Body Measurements
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({});

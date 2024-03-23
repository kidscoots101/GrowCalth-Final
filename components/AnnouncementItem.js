import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import Info from "../screens/Info";

const windowWidth = Dimensions.get("window").width;

const AnnouncementItem = ({ header, subTitle }) => {
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => {
          navigation.navigate("Info");
          console.log(header);
        }}
      >
        <Text style={[styles.itemHeading, { paddingBottom: 7 }]}>{header}</Text>
        <Text style={styles.itemText}>{subTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnnouncementItem;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFBF6",
    // backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 0.5,
  },
  innerContainer: {
    flexDirection: "column",
    borderRadius: 15,
  },
  itemHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  itemText: {
    fontWeight: "300",
    fontSize: 17,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "black",
  },
  subTitle: {
    color: "#C1CAD6",
    marginTop: -5,
    marginHorizontal: 14,
  },
});

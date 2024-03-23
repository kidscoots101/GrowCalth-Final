import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const ListItem = ({ housePoint, head, sub }) => {
  const windowWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  // console.log(housePoint)
  return (
    <View>
      {/* Second */}
      <TouchableOpacity
        style={{
          backgroundColor: "#E9ECF1",
          flexDirection: "row",
          marginBottom: 15,
          borderRadius: 17,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#89B3DD",
            width: 35,
            height: 35,
            borderRadius: 10,
            alignSelf: "center",
            marginHorizontal: 15,
          }}
        ></View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <View
            style={[
              styles.innerContainer,
              {
                paddingHorizontal: 10,
                width: windowWidth - 130,
                height: 80,
                borderRadius: 15,
                marginLeft: 10,
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={[styles.itemHeading, { padding: 5, color: "#252C45" }]}
            >
              {head}
            </Text>
            <Text
              style={[
                styles.itemText,
                { paddingHorizontal: 5, color: "#252C45" },
              ]}
            >
              ✨{sub}✨
            </Text>
          </View>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", width: 70 }}
        >
          <Text
            style={{
              fontSize: 28,
              marginRight: 10,
              marginLeft: 10,
              fontWeight: "800",
            }}
          >
            {housePoint}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    shadowColor: "black",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    width: windowWidth - 19,
    borderRadius: 14,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  innerContainer: {
    flexDirection: "column",
    marginBottom: 20,
    justifyContent: "center",
  },
  itemHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },
  itemText: {
    fontWeight: "300",
    fontSize: 16,
  },
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  progressBar: {
    height: 15,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});

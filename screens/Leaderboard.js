import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import firebase from "firebase/compat";

const points = [290, 200, 160, 190, 240];

const colorValues = [
  {
    color: "Black",
    value: points[0],
    image: require("./../assets/black.jpeg"),
  },
  { color: "Blue", value: points[1], image: require("./../assets/blue.jpeg") },
  { color: "Red", value: points[3], image: require("./../assets/red.jpeg") },
  {
    color: "Green",
    value: points[2],
    image: require("./../assets/green.jpeg"),
  },
  {
    color: "Yellow",
    value: points[4],
    image: require("./../assets/yellow.jpeg"),
  },
];

const ColorValuesList = () => {
  const [point, setPoint] = useState([]);
  const pointsref = firebase.firestore().collection("HousePoints");
  const pointthing = () => {
    pointsref.onSnapshot((querySnapshot) => {
      var house = [];
      querySnapshot.forEach((doc) => {
        const { color, points } = doc.data();

        const color_to_jpg = {
          Black: require("./../assets/black.jpeg"),
          Green: require("./../assets/green.jpeg"),
          Blue: require("./../assets/blue.jpeg"),
          Yellow: require("./../assets/yellow.jpeg"),
          Red: require("./../assets/red.jpeg"),
        };

        house.push({
          id: doc.id,
          color: color,
          points: points,
          image: color_to_jpg[color],
        });
      });
      house = house.sort((a, b) => b.points - a.points);
      setPoint(house);
    });
  };
  useEffect(() => {
    pointthing();
  }, []);
  const renderColorValue = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
      }}
    >
      <Image style={[styles.image]} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={{ flex: 1, fontSize: 23, marginLeft: 50 }}>
          {item.color}
        </Text>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ marginLeft: 50, fontSize: 25, fontWeight: "bold" }}>
            {item.points}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      style={{ backgroundColor: "white" }}
      data={point}
      renderItem={renderColorValue}
      keyExtractor={(item) => item.color}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default ColorValuesList;
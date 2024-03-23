import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import api from ".././api/apiQuote.json";

const Quotes = () => {
  const [Quote, setQuote] = useState("Loading...");
  const [Author, setAuthor] = useState("Loading...");
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        setQuote(result.content);
        setAuthor(result.author);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#B1E1FF",
      }}
    >
      <View
        style={{
          backgroundColor: "#B1E1FF",
          width: windowWidth - 30,
          height: 720,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            fontStyle: "italic",
            paddingHorizontal: 10,
            textAlign: "left",
            paddingTop: 60,
          }}
        >
          "
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            width: windowWidth - 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "top",
              fontSize: 40,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            {Quote}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            fontStyle: "italic",
            paddingHorizontal: 10,
            textAlign: "right",
            paddingBottom: 25,
          }}
        >
          "
        </Text>
        <Text
          style={{
            textAlignVertical: "top",
            fontSize: 25,
            fontWeight: "900",
            fontStyle: "italic",
            paddingBottom: 80,
            textDecorationLine: "underline",
            textAlign: "center",
          }}
        >
          {Author}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 15,
            marginBottom: 60,
            padding: 10,
          }}
          onPress={getQuote}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 35,
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Get new quote
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({});
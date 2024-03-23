import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AnnouncementDetail from "./AnnouncementDetail";
import ListItem from "./ListItem";
import * as firebase from "firebase";

const Info = ({ housePoints, theHeading, subTitle }) => {
  // console.log(housePoints)
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const openModal = (item) => {
    setSelectedChallenge(item);
    // navigation.navigate("Info")
  };
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection("todos");

  const announcements = () => {
    todoRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { heading, text } = doc.data();
        users.push({
          id: doc.id,
          heading,
          text,
        });
      });
      setUsers(users);
    });
  };
  useEffect(() => {
    announcements();
  }, []);
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
            }
            logoUrl={item.image}
            onPress={() => openModal(item)}
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
      {selectedChallenge ? (
        <AnnouncementDetail
          heading={selectedChallenge.heading}
          points={selectedChallenge.housePoints}
          subTitle={selectedChallenge.subTitle}
        />
      ) : null}
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});

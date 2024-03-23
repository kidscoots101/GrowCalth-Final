import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import { passedProps } from '../screens/Announcements'
// export var passedProps = {
//     heading: undefined,
//     subTitle: undefined
// }

const AnnouncementDetail = ({ heading, points, subTitle }) => {
  const openModal = (item) => {
    setSelectedChallenge(item);
    // navigation.navigate("Info")
  };
  return (
    <View>
      <Text>
        {/* {route.params.heading} */}
        {heading}
        {points}
        {subTitle}
      </Text>
    </View>
  );
};

export default AnnouncementDetail;

const styles = StyleSheet.create({});

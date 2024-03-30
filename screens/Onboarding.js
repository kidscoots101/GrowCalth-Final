import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, Alert } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get("window").width;
  const [selectedLanguage, setSelectedLanguage] = useState("None selected");

  const windowHeight = Dimensions.get("window").height;
  return (
    <Onboarding
      onSkip={() => navigation.replace("Home")}
      onDone={() =>
        navigation.replace("Home", { selectedHouse: selectedLanguage })
      }
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/f4/b4/2f/f4b42fd35e95c9880e01cd98bd49b9fb.gif",
              }}
              style={{
                width: windowWidth - 20,
                height: windowHeight - 520,
                borderRadius: 15,
              }}
            />
          ),
          title: "Track your activity!",
          titleStyles: { fontWeight: "bold" },
          subTitleStyles: { color: "black" },
          subtitle:
            "With our in built pedometer, you can track your steps, calories and distance travelled! All in 1 app!",
        },
        {
          backgroundColor: "#fff",
          titleStyles: { fontWeight: "bold" },
          subTitleStyles: { color: "black" },
          image: (
            <Image
              source={{
                uri: "https://www.kindpng.com/picc/m/504-5044310_icon-quote-graphic-design-hd-png-download.png",
              }}
              style={{ width: windowWidth - 20, height: windowHeight - 520 }}
            />
          ),
          title: "Motivational Quotes",
          subtitle:
            "Having a positive mindset daily helps with you mental health!",
        },
        {
          backgroundColor: "#fff",
          titleStyles: { fontWeight: "bold" },
          subTitleStyles: { color: "black" },
          image: (
            <Image
              source={require("../assets/LeaderBoard.png")}
              style={{ width: windowWidth - 20, height: windowHeight - 520 }}
            />
          ),
          title: "Compete with others!",
          subtitle:
            "Take part in challenges to gain house points for your respective houses!",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
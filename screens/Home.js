import { StyleSheet, Text, View, TouchableOpacity, Alert, Dimensions, SafeAreaView, ScrollView, Image, StatusBar} from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import GoogleFit, { BucketUnit, Scopes } from "react-native-google-fit";
import {createStackNavigator} from '@react-navigation/stack'
import Quotes from './Quotes';
import Goals from './Goals';
import ColorValuesList from './Leaderboard';


const Homes = () => {
  const navigation = useNavigation();
  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to Logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('userToken'); // Remove only the userToken
            auth
              .signOut()
              .then(() => {
                navigation.replace("Login");
              })
              .catch((error) => alert(error.message));
          } catch (error) {
            console.error("Error clearing userToken from AsyncStorage:", error);
          }
        },
      },
    ]);
  };
  const [steps, setSteps] = useState(0);
  const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
    ],
  };
  GoogleFit.authorize(options)
    .then((authResult) => {
      console.log("🚀 ~ .then ~ authResult:", authResult);
      if (authResult.success) {
        console.log("🚀 ~ .then ~ AUTH_SUCCESS:");
        // Call getStepCounts initially
        getStepCounts();

        // Set interval to fetch steps every 5 seconds
        const intervalId = setInterval(getStepCounts, 5000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
      } else {
        console.log("🚀 ~ .then ~ AUTH_DENIED:");
      }
    })
    .catch((error) => {
      console.log("🚀 ~ Homes ~ error:", error);
      // dispatch("AUTH_ERROR");
    });
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const getStepCounts = async () => {
    try {
      const opt = {
        startDate: date.toISOString(), // required ISO8601Timestamp
        endDate: new Date().toISOString(), // required ISO8601Timestamp
        bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
        bucketInterval: 1, // optional - default 1.
      };
      console.log("🚀 ~ readData ~ opts:", opt);
      const res = await GoogleFit.getDailyStepCountSamples(opt);

      console.log("🚀 ~ readData ~ rees:", res);
      setSteps(res?.[2]?.steps[0].value || 0);
    } catch (error) {
      console.log("🚀 ~ readData ~ error:", error);
    }
  };

  useEffect(() => {
    if (GoogleFit?.isAuthorized) {
      getStepCounts();
      // const interval = setInterval(getStepCounts, 5000); // Call getStepCounts every 5 seconds
      // return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [GoogleFit]);
  const finalPoints = steps/1000
  const dist = steps / 1300;
  var distance = dist.toFixed(2)
  const [Quote, setQuote] = useState("")
  const [Author, setAuthor] = useState("")
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

  async function UpdatePoints() {
    const user = await firebase
      .firestore()
      .collection("users")
      .doc(auth.currentUser.uid);

    const data = (await user.get()).data();

    const newPoints = Math.floor((data.steps + 1) / 1000);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", newPoints);

    await user.update({ steps: data.steps + 1, points: newPoints });
    if (newPoints > data.points) {
      const house = await firebase
        .firestore()
        .collection("HousePoints")
        .doc(data.house);

      house.update({ points: (await house.get()).data().points + 1 });
    }
  }
  useEffect(() => {
    AsyncStorage.getItem("stepCount")
    .then((value) => {
      if (value !== null) {
        // Parse the saved value and update the step count state
        setSteps(parseInt(value, 10));
      }
    })
    .catch((error) => {
      console.error("Error retrieving step count: ", error);
    });
    UpdatePoints();
  }, [steps]);
  return (
    <SafeAreaView style={{ backgroundColor: "#FFFFF" }}>
      <ScrollView>
        <View style={styles.largeTitle}>
          <View style={{ paddingTop: 5 }}></View>
          <Text
            style={{
              fontSize: 39,
              fontWeight: "bold",
              color: "black",
              textShadowColor: "white",
              textShadowRadius: 2,
              textShadowOffset: {
                width: 3,
                height: 3,
              },
            }}
          >
            Home
          </Text>
          <Text style={styles.subTitle}>This is Home, truly</Text>
        </View>
        {/* <TouchableOpacity style={{borderWidth: 1.23, borderColor: 'black', width: 190, height: 170, marginHorizontal: 215, borderRadius: 15, marginTop: 50, marginBottom: -175, backgroundColor: 'white'}}>
            <Text>Progress</Text>
          </TouchableOpacity> */}
        <View style={{ backgroundColor: "#F2F2F2" }}>
          <View style={{ top: -10 }}>
            <TouchableOpacity
              style={{
                width: (windowWidth - 50) / 2,
                height: 170,
                borderRadius: 15,
                marginTop: 30,
                marginBottom: -170,
                marginLeft: (windowWidth + 25) / 2,
                shadowColor: "black",
                shadowColor: "#171717",
                backgroundColor: "black",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
              }}
              onPress={() => navigation.navigate("LeaderBoard")}
            >
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  paddingTop: 10,
                  color: "white",
                }}
              >
                Leaderboards
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 15,
                }}
              >
                <Image
                  source={require(".././assets/LeaderBoard.png")}
                  style={{ height: 110, width: 110 }}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.insightView, { elevation: 3}]}>
              <Text style={[styles.insights]}>Steps</Text>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={styles.circle}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                      {steps}
                    </Text>
                    <Text>steps</Text>
                  </View>
                </View>
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: -10,  }}>
            <View
              style={{
                marginTop: 38,
                paddingHorizontal: 5,
              }}
            ></View>
            <StatusBar style="auto" />
            <View
              style={{
                paddingHorizontal: (windowWidth - 15) / 2,
                marginTop: -80,
                marginLeft: 19,
              }}
            >
              <View
                style={{
                  width: (windowWidth - 52) / 2,
                  height: 235,
                  borderRadius: 15,
                  borderColor: "white",
                  paddingHorizontal: 10,
                  top: 4,
                  backgroundColor: "#FFFFFF",
                  elevation: 2
                }}
                // onPress={() => navigation.navigate("Progress")}
              >
                {/* Progress */}
                <Text style={{ fontSize: 19, fontWeight: "bold", top: 10 }}>
                  Progress
                </Text>
                <Text
                  style={{
                    fontSize: 63,
                    fontWeight: "900",
                    textAlign: "center",
                    top: 32,
                  }}
                >
                  {finalPoints}
                </Text>
                <Text
                  style={{ textAlign: "center", fontSize: 25, marginTop: 23 }}
                >
                {(steps / 1000) > 1 ? "House Points" : "House Point"}
                 </Text>
              </View>
            </View>
            <StatusBar style="auto" />
            <View style={{ paddingHorizontal: 20, paddingTop: 75 }}>
              <View style={[styles.dailyQuotes, { elevation: 3}]}>
                {/* Distance */}
                <Text
                  style={{
                    fontSize: 17.5,
                    fontWeight: "bold",
                    color: "black",
                    marginTop: -4,
                  }}
                >
                  Distance
                </Text>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: 120,
                      height: 120,
                      borderRadius: 80,
                      backgroundColor: "#EFECE5",
                      marginHorizontal: 17,
                      top: 10,

                      borderColor: "black",
                      borderWidth: 7,
                    }}
                  >
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                      {distance}
                    </Text>
                    <Text>km</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                height: 130,
                width: windowWidth - 35,
                borderRadius: 10,
                borderWidth: 0,
                marginLeft: 20,
                bottom: 240,
                backgroundColor: "#B7CADB",
                elevation: 3
              }}
              onPress={() => navigation.navigate("Quotes")}
            >
              <Text
                style={{
                  paddingTop: 10,
                  paddingHorizontal: 10,
                  fontSize: 18,
                  fontWeight: "900",
                  color: "#100F0F",
                }}
              >
                {Quote}
              </Text>
              <Text
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                  fontSize: 17,
                  color: "#100F0F",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecorationLine: "underline",
                  textAlign: 'right', marginRight: 10
                }}
              >
                {Author}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 165,
                width: windowWidth - 34,
                borderRadius: 15,
                backgroundColor: "#754F5B",
                marginHorizontal: 20,
                marginTop: -220,
                elevation: 3
              }}
              onPress={() => navigation.navigate("Goals")}
            >
              <Text
                style={{
                  padding: 10,
                  fontWeight: "bold",
                  fontSize: 22,
                  color: "white",
                }}
              >
                Set your Goals 🎯
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  top: -3,
                  fontSize: 12,
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Goals are helpful
              </Text>
              <Text style={{ fontSize: 110, left: -10, bottom: 10 }}>🎯</Text>
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 20,
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontSize: 10, color: "#C1CAD6" }}>
                Copyright GrowCalth © 2022 All rights Reserved{" "}
              </Text>
              <Text style={{ fontSize: 10, color: "#C1CAD6" }}>
                Singapore, Singapore City{" "}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACCBE1",
    // backgroundColor: '#CEE5F2',
    //or can try use this as background colour: #7C98B3 or #ACCBE1 or #B1B695
  },
  largeTitle: {
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#EFF1F5",
    // this is the weird blue color background (change ltr pls)
  },
  subTitle: {
    color: "#C1CAD6",
    marginTop: 4,
  },
  insights: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
  insightView: {
    width: (windowWidth - 50) / 2,
    height: 220,
    borderRadius: 15,
    borderColor: "white",
    borderWidth: 0,
    paddingHorizontal: 10,
    shadowColor: "black",
    shadowColor: "#171717",
    backgroundColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    marginHorizontal: 20,
  },
  dailyQuotes: {
    width: (windowWidth - 45) / 2,
    height: 190,
    borderRadius: 15,
    paddingTop: 15,
    paddingHorizontal: 10,
    top: -260,
    shadowColor: "black",
    shadowColor: "#171717",
    backgroundColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
  middle: {
    paddingHorizontal: 20,
    marginTop: 5,
  },
  white: {
    width: 100,
    height: 10,
    backgroundColor: "black",
  },
  top: {
    marginTop: -3,
  },
  quotes: {
    marginTop: 53,
    paddingHorizontal: 5,
  },
  quote: {
    fontSize: 26.7,
    fontWeight: "bold",
    color: "#473144",
    marginTop: -40,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 80,
    backgroundColor: "#EFECE5",
    marginHorizontal: 10,
    marginTop: 20,
    borderColor: "black",
    borderWidth: 7,
  },
  moreInsights: {
    paddingTop: 170,
    paddingHorizontal: 30,
  },
  Click: {
    color: "#B7B5B3",
    textDecorationLine: "underline",
  },
  paddin: {
    paddingHorizontal: 25,
    marginTop: -3,
  },
});

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homes"
        component={Homes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quotes"
        component={Quotes}
        options={{ headerBackTitle: "Home", backgroundColor: "#B1E1FF" }}
      />
      <Stack.Screen
        name="Goals"
        component={Goals}
        options={{ headerBackTitle: "Home" }}
      />
      <Stack.Screen
        name="LeaderBoard"
        component={ColorValuesList}
        options={{ headerBackTitle: "Home" }}
      />
    </Stack.Navigator>
  );
}
import React from "react";
import { ScrollView, Linking } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { FontAwesome } from "react-native-vector-icons";


const Item = ({ title, role,icon }) => (
  <View style={styles.itemContainer}>
    <FontAwesome name={icon} size={24} color="#3498db" style={styles.icon} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemRole}>{role}</Text>
      <Text style={styles.itemClass}>Class of 2024</Text>
    </View>
  </View>
);


const windowWidth = Dimensions.get("window").width;

const AboutUs = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Han Jeong Seu, Caleb',
      role: "Lead Developer of GrowCalth",
      icon: "sitemap"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Chay Yu Hung Tristan',
      role: "Lead Developer of GrowCalth (iOS)",
      icon: "cutlery"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Felix Forbes Dimjati',
      role: "User Experience (UX) Specialist of GrowCalth",
      icon: "android"
    },
    {
      id: '58694a0f-3da1-w71f-bd96-145571e29d72',
      title: 'Aravind Bellam Nandakumar',
      role: "GrowCalth's Marketing and Communications IC",
      icon: "wechat"
    },
    {
      id: '58694a0f-3da1-471f-bd96-125571e29d72',
      title: 'Darryan Lim Yuan Sheng',
      role: "GrowCalth's designer",
      icon: "paint-brush"
    },
  ];
  const emailLink = () => {
    Linking.openURL("mailto:growcalth.main@gmail.com");
  };
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold", padding: 15 }}>
            About
          </Text>
          <View
            style={{
              width: windowWidth - 30,
              left: 16,
              borderRadius: 14,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "#F6E8EA",
              backgroundColor: '#FFFFFF'
              // shadowColor: "black",
              // shadowColor: "#171717",
              // shadowOffset: { width: -2, height: 4 },
              // shadowOpacity: 1,
              // shadowRadius: 3,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                // fontStyle: "italic",
                top: 10,
                marginHorizontal: 10,
                marginBottom: 23,
              }}
            >
              We are a group of students from School of Science and Technology
              Singapore and we built this app together with a team of 5. We did
              this with the aim of wanting to benefit the community through
              fitness. We hope that you have enojoyed our app while you used it
              and if you have any enquiries or feeback, please email us at
              <Text style={{ color: "#3498db", textDecorationLine: "underline" }} onPress={emailLink}>
                {" "}
                growcalth.main@gmail.com
              </Text>
            </Text>
            
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            {/* <Image
              source={require("../../assets/GrowCalthIcon.jpeg")}
              style={{
                width: windowWidth - 100,
                height: windowHeight - 600,
                borderRadius: 10,
                margin: 0,
                left: 0,
                top: -10,
              }}
            /> */}
            <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} role={item.role} icon={item.icon} />}
        keyExtractor={item => item.id}
      />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    // borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // marginHorizontal: 10,
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
  },
  itemRole: {
    fontSize: 16,
    color: "#555",
  },
  itemClass: {
    color: "#777",
  },
  descriptionContainer: {
    width: windowWidth - 30,
    left: 16,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "500",
    top: 10,
    marginHorizontal: 10,
    marginBottom: 23,
  },
  flatListContainer: {
    width: windowWidth - 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from "react-native";

const Icon = () => {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
        <TouchableOpacity>
          <View
            style={{
              padding: 15,
              backgroundColor: "#FFFFFF",
              borderRadius: 10,
              width: 300,
              height: 165,
              borderColor: "black",
              borderWidth: 1.23,
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{ width: 120, height: 120 }}
              source={require(".././assets/WorkoutsImage.jpeg")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Icon;

const styles = StyleSheet.create({});

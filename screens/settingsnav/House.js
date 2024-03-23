import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Leaders from "../../components/Leaders";

const House = ({ route }) => {
  const windowWidth = Dimensions.get("window").width;
  const params = route.params;
  const house = route.selectedLanguage;
  // const [selectedLanguage, setSelectedLanguage] = useState("None selected");
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        {/* <View style={{height: 30, backgroundColor: '#F7826F', justifyContent: 'center', alignItems: 'center', top: 20}}>
          <Text style={{fontSize: 15, textAlign: 'center'}}>H O U S E   I N F O </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          <Picker
            style={{marginTop: 20, backgroundColor: '#C7CCDB', width: windowWidth-50, borderRadius:20}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
             }>
               
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Black" value="Black" />
            <Picker.Item label="Yellow" value="Yellow" />
            <Picker.Item label="Red" value="Red" />
            <Picker.Item label="Green" value="Green" />
        </Picker>
        </View>
        <View style={{height: 30, backgroundColor: '#F7826F', justifyContent: 'center', alignItems: 'center', top: 20}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>Y O U R   H O U S E </Text>
          </View> */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          {/* <Text style={{fontSize: 40 }}>{selectedLanguage}</Text> */}
          <View
            style={{
              height: 30,
              backgroundColor: "#F7826F",
              justifyContent: "center",
              alignItems: "center",
              width: windowWidth,
            }}
          >
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              H O U S E L E A D E R S
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            {/* <TouchableOpacity style={{ alignSelf: "center" }}> */}
              <Leaders />
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default House;

const styles = StyleSheet.create({});
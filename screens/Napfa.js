import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const renderItem = ({ item }) => (
  <View style={styles.item}>
     <View style={styles.column}>
      <Text style={styles.name}>{item.rank}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.class}>{item.class}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.result}>{item.result}</Text>
    </View>
  </View>
);
// d

const sit_Up = [
  { id: "1", rank: "#1", name: "RISHAV GANGULY", class: "S2-04", result: 58 },
  { id: "2", rank: "#2", name: "YAAN WOON YU ZHE", class: "S2-02", result: 56 },
  { id: "3", rank: "#2", name: "ANDERS CHARLES LEE EKBERG", class: "S2-02", result: 56 },
  { id: "4", rank: "#4", name: "SHAI MING KONG (XIAO MINGJIANG)", class: "S2-07", result: 55 },
  { id: "5", rank: "#5", name: "CHOW YONG JUN", class: "S2-06", result: 54 },
];
const inclined_pullup = [
  { id: "1", rank: "#1", name: "YANN WOON YU ZHE", class: "S2-02", result: 41 },
  { id: "2", rank: "#2", name: "KEITH LIM KAI FOO", class: "S2-08", result: 39 },
  { id: "3", rank: "#3", name: "RIVERA ADRIEL HUYATID", class: "S2-03", result: 38 },
  { id: "4", rank: "#4", name: "EDGAR KYAW", class: "S2-01", result: 37 },
  { id: "5", rank: "#5", name: "FU CAI GUI", class: "S2-08", result: 35 },
];
const kilo_run = [
  { id: "1", rank: "#1", name: "KUAH YONG CHUAN, EZEKIEL", class: "S2-01", result: "9min 36s " },
  { id: "2", rank: "#2", name: "TAN QI JUN", class: "S2-02", result: "9min 57s" },
  { id: "3", rank: "#3", name: "ETHAN CHEONG XING HUA", class: "S2-02", result: "10min 24s" },
  { id: "4", rank: "#4", name: "SAMUEL CHEN YI", class: "S2-02", result: "10min 32s"},
  { id: "5", rank: "#5", name: "VARCHEL HO ZI XIONG", class: "S2-02", result: "10min 36s" },
  ];
const shuttle_run = [
  { id: "1", rank: "#1", name: "RISHAV GANGULY", class: "S2-04", result: "9.4s" },
  { id: "2", rank: "#2", name: "MARTIN FUN JERN WENG", class: "S2-04", result: "9.6s" },
  { id: "3", rank: "#2", name: "NG TZE RAYE (HUANG ZIRUI)", class: "S2-08", result: "9.6s" },
  { id: "4", rank: "#2", name: "LIM WEI AN JORDAN", class: "S2-01", result: "9.6s" },
  { id: "5", rank: "#5", name: "SHAI MING KONG (XIAO MINGJIANG)", class: "S2-07", result: "9.7s" },
];
const sit_and_reach = [
  { id: "1", rank: "#1", name: "FU CAI GUI", class: "S2-08", result: 67 },
  { id: "2", rank: "#2", name: "TAN YU NING", class: "S2-01", result: 61 },
  { id: "3", rank: "#3", name: "TIFFANY TAN XUAN YING", class: "S2-08", result: 56 },
  { id: "4", rank: "#4", name: "KEITH LIM KAI FOO", class: "S2-08", result: 54 },
  { id: "5", rank: "#5", name: "CHARIS TAN HUI WEN", class: "S2-02", result: 54 },
];
const standing_bj = [
  { id: "1", rank: "#1", name: "NG TZE RAYE (HUANG ZIRUI)", class: "S2-08", result: 253 },
  { id: "2", rank: "#2", name: "JOVAN LEE KAI WEN", class: "S2-03", result: 252 },
  { id: "3", rank: "#3", name: "YE MYINT MYAT RYAN", class: "S2-03", result: 245 },
  { id: "4", rank: "#4", name: "ANDERS CHARLES LEE EKBERG", class: "S2-02", result: 241 },
  { id: "5", rank: "#5", name: "VIJAY GANESH LATHISH", class: "S2-07", result: 235 },
];
const NapfaCategoryScreen = ({ data, title }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
           <Text style={styles.headerText}>Rank</Text>
            <Text style={styles.headerText}>Name</Text>
            <Text style={styles.headerText}>Class</Text>
            <Text style={styles.headerText}>Result</Text>
          </View>
        )}
      />
    </View>
  );
};

const Napfa2023 = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={{backgroundColor: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>Sit Ups</Text>
      <NapfaCategoryScreen data={sit_Up} title="Sit-Up" />
      <Text style={{backgroundColor: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>Incline Pull up</Text>
      <NapfaCategoryScreen data={inclined_pullup} title="Inclined Pull-Up" />
      <Text style={{backgroundColor: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>Kilo Run</Text>
      <NapfaCategoryScreen data={kilo_run} title="Kilo Run" />
      <Text style={{backgroundColor: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>Shuttle Run</Text>
      <NapfaCategoryScreen data={shuttle_run} title="Shuttle Run" />
      <Text style={{backgroundColor: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>Sit and Reach</Text>
      <NapfaCategoryScreen data={sit_and_reach} title="Sit and Reach" />
      <Text style={{backgroundColor: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>SBJ</Text>
      <NapfaCategoryScreen data={standing_bj} title="Standing Broad Jump" />
    </ScrollView>
  );
};

const Napfa2024 = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <FlatList
        data={studentData2024}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Student</Text>
            <Text style={styles.headerText}>Class</Text>
            <Text style={styles.headerText}>Result</Text>
          </View>
        )}
      /> */}
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25}}>No data</Text>
      <Text style={{color: 'grey'}}>There is no data available {"\n"}     for NAPFA 2024 yet.</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

export default function NapfaTabs() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 39,
          fontWeight: "bold",
          padding: 10,
          marginTop: 5,
        }}
      >
        NAPFA
      </Text>
      <Text style={styles.subTitle}>Leaderboards</Text>
      <Tab.Navigator>
        <Tab.Screen name="NAPFA 2023" component={Napfa2023} />
        <Tab.Screen name="NAPFA 2024" component={Napfa2024} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
  },
  column: {
    flex: 1,
  },
  name: {
    textAlign: "left",
  },
  class: {
    flex: 1,
  },
  result: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 2,
    borderColor: "#333",
    backgroundColor: "#FFFFFF",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    padding: 10,
    marginTop: -15,
    color: "#C1CAD6",
  },
});
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Leaders = () => {
  const windowWidth = Dimensions.get("window").width;
  const blueHouse = [
    "theshyan_thirun@s2021.ssts.edu.sg ",
    "aravind_b_n@s2021.sst.edu.sgg",
  ];
  const blackHouse = [
    "song_jun_hao_jarell@s2021.ssts.edu.sg ",
    "chng_wei_ian@s2021.ssts.edu.sg",
  ];
  const greenHouse = [
   "foo_g_ywinn@s2021.ssts.edu.sg ", 
   "teng_rui_jie@s2021.ssts.edu.sg"
  ];
  const redHouse = [
    "ng_kian_ping@s2021.ssts.edu.sg ",
    "u_warisa@s2021.ssts.edu.sg",
  ];
  const yellowHouse = [
    "zac_gan_yu_chieh@s2021.ssts.edu.sg  ",
    "jesse_chia_kah_sim@s2021.ssts.edu.sg",
  ];

  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        width: windowWidth - 10,
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
        BlueHouse:{" "}
      </Text>

      <Text style={{ fontSize: 20 }}>{blueHouse}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
        BlackHouse:{" "}
      </Text>

      <Text style={{ fontSize: 20 }}>{blackHouse}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
        GreenHouse:{" "}
      </Text>

      <Text style={{ fontSize: 20 }}>{greenHouse}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
        RedHouse:{" "}
      </Text>

      <Text style={{ fontSize: 20 }}>{redHouse}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 20 }}>
        YellowHouse:{" "}
      </Text>
      <Text style={{ fontSize: 20 }}>{yellowHouse}</Text>
    </View>
  );
};

export default Leaders;

const styles = StyleSheet.create({});

import React from "react";
import Newpost from "react-native-vector-icons/FontAwesome";
import Like from "react-native-vector-icons/Ionicons";
import Chat from "react-native-vector-icons/Fontisto";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image style={styles.ig} source={require("../assets/ig.png")} />
      <View style={styles.icons}>
        <TouchableOpacity>
          <Newpost
            style={styles.icon}
            name="plus-square-o"
            size={25}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Like style={styles.icon} name="md-heart-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Chat style={styles.icon} name="messenger" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  ig: {
    height: 45,
    width: 110,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    marginRight: 20,
  },
});

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { profilUser } from "../data";
import Setting from "react-native-vector-icons/Entypo";
import Like from "react-native-vector-icons/Ionicons";
import Comment from "react-native-vector-icons/Ionicons";
import Send from "react-native-vector-icons/Ionicons";
import Collect from "react-native-vector-icons/Feather";

const PostUser = () => {
  return profilUser.map((akun, index) => {
    return (
      <View style={styles.container} key={index}>
        {/* Navbar user */}

        <View style={styles.containerNav}>
          <View style={styles.contNavpost}>
            <View style={styles.circleNavpost}>
              <Image style={styles.imgPost} source={akun.imgProfil} />
            </View>
            <Text style={styles.namaUser}>{akun.nameUser}</Text>
          </View>
          <TouchableOpacity>
            <Setting
              style={{ padding: 10, top: 20 }}
              name="dots-three-vertical"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* postingan user */}
        <View>
          <Image style={styles.postingan} source={akun.postingan} />
        </View>

        {/* icons */}
        <View style={styles.containerIcons}>
          <View style={styles.icons}>
            <Like
              style={styles.icon}
              name="md-heart-outline"
              size={30}
              color="white"
            />
            <Comment
              style={styles.icon}
              name="md-chatbubble-outline"
              size={28}
              color="white"
            />
            <Send
              style={styles.icon}
              name="paper-plane-outline"
              size={28}
              color="white"
            />
          </View>
          <Collect name="bookmark" size={30} color="white" />
        </View>

        {/* Description */}
        <View style={styles.containerDesc}>
          <View>
            <Text style={styles.text}>{akun.like}</Text>
          </View>
          <View>
            <Text style={styles.desc}>{akun.desc}</Text>
          </View>
          <View>
            <Text style={styles.comment}>{akun.comment}</Text>
          </View>
        </View>
      </View>
    );
  });
};

export default PostUser;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5
  },
  containerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contNavpost: {
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imgPost: {
    width: 35,
    height: 35,
    borderRadius: 50,
    top: 1.5,
    left: 1.5,
  },
  circleNavpost: {
    borderColor: "rgba(245, 96, 64, 1)",
    borderWidth: 1,
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  namaUser: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
  postingan: {
    width: 420,
    height: 300,
    marginTop: 10,
  },
  containerIcons: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 20,
  },
  containerDesc: {
    paddingLeft: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  desc: {
    color: "white",
    marginTop: 5,
  },
  comment: {
    color: "grey",
    marginTop: 5,
  },
});

import React from "react";
import Post from "react-native-vector-icons/AntDesign";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Snapgram } from "../data";

// const Snap = () => {
//   const [snapIndex, setSnapIndex] = useState(0);

//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
//     }
//   };

export default function SnapGram() {
  return Snapgram.map((snap, key) => {
    return (
      <TouchableOpacity >
        {key === 0 ? (
          <View style={styles.containerUser} >
            <View style={styles.post} key={snap.key}>
              <Post name="plus" size={10} color="white"  />
            </View>
            <Image style={styles.img} source={snap.profileImg} />
            <Text style={styles.nameuser}>{snap.namaUser}</Text>
          </View>
        ) :  (
          <View style={styles.containerUser}>
            <View style={{...styles.circle, borderColor: "grey"}}>
              <Image
                style={styles.img}
                source={snap.profileImg}
              />
            </View>
            <Text style={styles.nameuser}>{snap.namaUser}</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  });
}

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "white",
  //     flexWrap: "wrap",
  //   },
  //   Snapgram: {
  //     padding: 10,
  //     backgroundColor: "red",
  //   },
  img: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
    marginBottom: 10,
    borderRadius: 50,
    left: 3,
    top: 3,
  },
  containerUser: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  circle: {
    borderColor: "rgba(245, 96, 64, 1)",
    borderWidth: 2,
    borderRadius: 50,
    width: 80,
    height: 80,
  },

  nameuser: {
    paddingTop: 5,
    color: "white",
  },
  post: {
    position: "absolute",
    width: 23,
    height: 23,
    borderWidth: 2,
    backgroundColor: "#0983E9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    right: 2,
    zIndex: 1,
  },
});

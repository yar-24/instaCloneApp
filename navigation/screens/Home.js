import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import Navbar from "../../components/Navbar";
import Postingan from "../../components/Postingan";

const Home = ({navigation}) => {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{ backgroundColor: "black", paddingTop: 10}}>
        <Navbar />
        <Postingan />
      </View>
    </SafeAreaView>
  );
};

export default Home;

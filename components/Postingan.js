import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PostUser from "./postingan/PostUser";
import Snap from "./Snap";

const Postingan = () => {
  return (
    <ScrollView>
      <Snap />
      <PostUser />
    </ScrollView>
  );
};

export default Postingan;

const styles = StyleSheet.create({});

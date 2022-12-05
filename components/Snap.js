import React from "react";
import SnapGram from "./postingan/SnapGram"
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Snapgram } from "./data";

export default function Snap() {

    return (
      <ScrollView
        style={styles.Snapgram}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <SnapGram/>
        </ScrollView>
        )
}
        
const styles = StyleSheet.create({
  Snapgram: {
    padding: 10
  },
})
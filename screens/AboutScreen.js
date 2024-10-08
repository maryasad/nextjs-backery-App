import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Persian Nan Bakery</Text>
      <Text style={styles.description}>
        We are a family-owned bakery, offering a variety of freshly baked goods
        made with love and the finest ingredients. Come visit us for delicious
        pastries, bread, and more! We specialize in traditional Persian bread
        made with high-quality ingredients, bringing authentic flavors to your
        table.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

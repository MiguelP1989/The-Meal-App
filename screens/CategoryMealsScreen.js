import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoryScreen = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

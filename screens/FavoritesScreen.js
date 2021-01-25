import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FavoriteScreen = ({}) => {
  return (
    <View style={styles.screen}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

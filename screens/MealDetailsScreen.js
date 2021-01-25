// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title="GO BACK TO CATEGORIES"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryScreen</Text>
      <Button
        title="GO TO DETAILS"
        onPress={() => {
          navigation.navigate({ routeName: "MealDetails" });
        }}
      />
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
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

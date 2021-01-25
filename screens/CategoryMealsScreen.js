// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

// Global imports
import { CATEGORIES } from "../data/dummy-data";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CategoryScreen = ({ navigation }) => {
  // Variables
  const catId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // Props
  const buttonProps = {
    title: "GO TO DETAILS",
    onPress: () => {
      navigation.navigate({ routeName: "MealDetails" });
    },
  };

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button {...buttonProps} />
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

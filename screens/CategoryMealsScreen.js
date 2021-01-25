// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

// Global imports
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CategoryMealScreen = ({ navigation }) => {
  // Variables
  const catId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // Props
  const buttonDetailsProps = {
    title: "GO TO DETAILS",
    onPress: () => {
      navigation.navigate({ routeName: "MealDetails" });
    },
  };

  const buttonGoBackProps = {
    title: "GO BACK",
    onPress: () => navigation.goBack(),
  };

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <Button {...buttonDetailsProps} />
      <Button {...buttonGoBackProps} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const selectedCategory = CATEGORIES.find(
    (cat) => cat.id === navigationData.navigation.getParam("categoryId")
  );
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  };
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

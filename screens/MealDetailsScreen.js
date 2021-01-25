// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

// Global imports
import { MEALS } from "../data/dummy-data";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const RenderMealDetails = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.ingredients}</Text>
    </View>
  );
};

const MealDetailScreen = ({ navigation }) => {
  // Variables
  const mealId = navigation.getParam("mealId");

  // Hooks
  const displayMealDetails = MEALS.filter((meal) => meal.id !== mealId);

  // Props
  const flatListProps = {
    data: displayMealDetails,
    keyExtractor: (item) => item.id,
    renderItem: RenderMealDetails,
    style: { width: "100%" },
  };

  const buttonProps = {
    title: "GO BACK TO CATEGORIES",
    onPress: () => navigation.popToTop(),
  };

  return (
    <View style={styles.screen}>
      <FlatList {...flatListProps} />
      <Button {...buttonProps} />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const selectedMeal = MEALS.find(
    (meal) => meal.id === navigationData.navigation.getParam("mealId")
  );
  return {
    headerTitle: selectedMeal.title,
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

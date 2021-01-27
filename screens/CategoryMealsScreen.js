// Third-party imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// Global imports
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CategoryMealScreen
 * @description Screen to render the meals for each category.
 * @param {object} navigation - used to get access to the categoryId
 *
 */
const CategoryMealScreen = ({ navigation }) => {
  // Variables
  const catId = navigation.getParam("categoryId");

  // Hooks
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return displayMeals.length === 0 ? (
    <View style={styles.content}>
      <Text>No Meals found!!</Text>
    </View>
  ) : (
    <MealList listData={displayMeals} navigation={navigation} />
  );
};

// Navigation Settings
CategoryMealScreen.navigationOptions = (navigationData) => {
  const selectedCategory = CATEGORIES.find(
    (cat) => cat.id === navigationData.navigation.getParam("categoryId")
  );
  return {
    headerTitle: selectedCategory.title,
  };
};

// Styles
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;

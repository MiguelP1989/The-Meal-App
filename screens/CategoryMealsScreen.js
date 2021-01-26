// Third-party imports
import React from "react";

// Global imports
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CategoryMealScreen = ({ navigation }) => {
  // Variables
  const catId = navigation.getParam("categoryId");

  // Hooks
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const selectedCategory = CATEGORIES.find(
    (cat) => cat.id === navigationData.navigation.getParam("categoryId")
  );
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;

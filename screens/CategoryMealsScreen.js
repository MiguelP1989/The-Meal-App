// Third-party imports
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

// Global imports
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItems";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const RenderMealScreen = ({ navigation, itemData }) => {
  // Props
  const mealIteamProps = {
    title: itemData.item.title,
    duration: itemData.item.duration,
    complexity: itemData.item.complexity,
    affordability: itemData.item.affordability,
    imageUrl: itemData.item.imageUrl,
    onSelectMeal: () =>
      navigation.navigate({
        routeName: "MealDetails",
        params: { mealId: itemData.item.id },
      }),
  };

  return <MealItem {...mealIteamProps} />;
};

const CategoryMealScreen = ({ navigation }) => {
  // Variables
  const catId = navigation.getParam("categoryId");

  // Hooks
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  // Props
  const flatListProps = {
    data: displayMeals,
    keyExtractor: (item) => item.id,
    renderItem: (item) => (
      <RenderMealScreen navigation={navigation} itemData={item} />
    ),
    style: { width: "100%" },
  };

  return (
    <View style={styles.screen}>
      <FlatList {...flatListProps} />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

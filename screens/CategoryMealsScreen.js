// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

// Global imports
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const RenderMealScreen = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoryMealScreen = ({ navigation }) => {
  // Variables
  const catId = navigation.getParam("categoryId");

  // Hooks
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={RenderMealScreen}
      />
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

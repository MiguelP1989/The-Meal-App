// Third-party imports
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Global imports
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const FavoriteScreen = ({ navigation }) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={navigation} />;
};

export default FavoriteScreen;

FavoriteScreen.navigationOptions = {
  headerTitle: "Your Favorites",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.secondaryColor : "",
  },
};

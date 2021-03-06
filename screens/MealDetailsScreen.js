// Third-party imports
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Global imports
import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/action/meals";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function MealDetailScreen
 * @description Screen to render the details of each meal.
 * @param {object} navigation - used to have access to the mealId.
 */
const MealDetailScreen = ({ navigation }) => {
  // Variables
  const mealId = navigation.getParam("mealId");

  // Hooks
  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  // const currentMealisFavorite = useSelector((state) =>
  //   state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  // );
  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  // useEffect(() => {
  //   navigation.setParams({ isFav: currentMealisFavorite });
  // }, [currentMealisFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ing) => (
        <View style={styles.listItems}>
          <Text key={ing}>{ing}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <View style={styles.listItems}>
          <Text key={steps}>{steps}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

// Navigation Settings
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const ToggleFav = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-outline-star"}
          onPress={ToggleFav}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

// Styles
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  steps: {},
  listItems: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

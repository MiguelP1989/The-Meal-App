// Third-party imports
import React from "react";
import { useSelector } from "react-redux";
import { View, FlatList, StyleSheet } from "react-native";

// Global imports

// Local imports
import MealItem from "../components/MealItems";

////////////////////////////////////////////////////////////////////////////////

const RenderMealScreen = ({ navigation, itemData, currentMealisFavorite }) => {
  // Hooks
  const isFavorite = currentMealisFavorite.some(
    (meal) => meal.id === itemData.item.id
  );
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
        params: {
          mealId: itemData.item.id,
          mealTitle: itemData.item.title,
          isFav: isFavorite,
        },
      }),
  };

  return <MealItem {...mealIteamProps} />;
};

const MealList = ({ listData, navigation }) => {
  // Hooks
  const currentMealisFavorite = useSelector(
    (state) => state.meals.favoriteMeals
  );

  // Props
  const flatListProps = {
    data: listData,
    keyExtractor: (item) => item.id,
    renderItem: (item) => (
      <RenderMealScreen
        currentMealisFavorite={currentMealisFavorite}
        navigation={navigation}
        itemData={item}
      />
    ),
    style: { width: "100%" },
  };

  return (
    <View style={styles.screen}>
      <FlatList {...flatListProps} />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Third-party imports
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

// Global imports

// Local imports
import MealItem from "../components/MealItems";

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

const MealList = ({ listData, navigation }) => {
  // Props
  const flatListProps = {
    data: listData,
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

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

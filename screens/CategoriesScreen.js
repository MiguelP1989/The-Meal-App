// Third-party imports
import React from "react";
import { StyleSheet, FlatList } from "react-native";

// Global imports
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    // Props
    const categoryGridTileProps = {
      title: itemData.item.title,
      color: itemData.item.color,
      onSelect: () =>
        navigation.navigate({
          routeName: "CategoryMeals",
          params: { categoryId: itemData.item.id },
        }),
    };
    return <CategoryGridTile {...categoryGridTileProps} />;
  };

  // Props
  const flatListProps = {
    keyExtractor: (item) => item.id,
    data: CATEGORIES,
    renderItem: renderGridItem,
    numColumns: 2,
  };

  return <FlatList {...flatListProps} />;
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;

const styles = StyleSheet.create({});

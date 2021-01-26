// Third-party imports
import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Global imports
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          ></Item>
        </HeaderButtons>
      );
    },
  };
};

export default CategoriesScreen;

const styles = StyleSheet.create({});

// Third-party imports
import React from "react";
import { FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Global imports
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/HeaderButton";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const RenderGridItem = ({ itemData, navigation }) => {
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

/**
 * @function CategoriesScreen
 * @description Screen to render all the meal categories.
 * @param {object} navigation - used to navigate to the CategoryMealScreen along with params (categoryId).
 */
const CategoriesScreen = ({ navigation }) => {
  // Props
  const flatListProps = {
    keyExtractor: (item) => item.id,
    data: CATEGORIES,
    renderItem: (item) => (
      <RenderGridItem navigation={navigation} itemData={item} />
    ),
    numColumns: 2,
  };

  return <FlatList {...flatListProps} />;
};

// Navigation Settings
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

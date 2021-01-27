// Third-party imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

// Global imports
import Colors from "../constants/Colors";
import MealList from "../components/MealList";
import CustomHeaderButton from "../components/HeaderButton";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FavoriteScreen
 * @description Screen to render all the favorite meals.
 * @param {object} navigation - used to navigate to the MealDetailScreen along with params ( mealId, mealTitle, isFav) on the MealList component.
 */
const FavoriteScreen = ({ navigation }) => {
  // Hooks
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  return favMeals.length === 0 || !favMeals ? (
    <View style={styles.text}>
      <Text>No favorites meals found. Start addinf some</Text>
    </View>
  ) : (
    <MealList listData={favMeals} navigation={navigation} />
  );
};

export default FavoriteScreen;

// Navigation Settings
FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.secondaryColor : "",
    },
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

// Styles
const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

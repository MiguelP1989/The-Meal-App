// Third-party imports
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Global imports
import CustomHeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import { setFilters } from "../store/action/meals";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FiltersScreen
 * @description Screen to render all the Filters.
 * @param {object} navigation - used to setParams (save) and point to the saveFilter hook to be able to comunicate with the header button (save).
 */
const FiltersScreen = ({ navigation }) => {
  //Hooks
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilter = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilter));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        state={isGlutenFree}
        label="Gluten-free"
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        state={isLactoseFree}
        label="Lactose-free"
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        state={isVegan}
        label="Vegan"
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        state={isVegetarian}
        label="Vegetarian"
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FiltersScreen;

// Navigation Settings
FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-save"
            onPress={navData.navigation.getParam("save")}
          ></Item>
        </HeaderButtons>
      );
    },
  };
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    margin: 20,
    fontSize: 22,
    textAlign: "center",
  },
});

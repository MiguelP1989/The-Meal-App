// Third-party imports
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

// Global imports
import CustomHeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const FiltersScreen = ({}) => {
  //Hooks
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

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
  };
};

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

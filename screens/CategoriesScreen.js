// Third-party imports
import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

// Global imports
import { CATEGORIES } from "../data/dummy-data";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const renderGridItem = (itemData) => {
  return (
    <View>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = ({}) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

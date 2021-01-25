// Third-party imports
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";

// Global imports
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    // Props
    const touchableOpacityProps = {
      style: styles.gridItem,
      onPress: () => navigation.navigate({ routeName: "CategoryMeals" }),
    };
    return (
      <TouchableOpacity {...touchableOpacityProps}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
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
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

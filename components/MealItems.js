// Third-party imports
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const MealItems = ({
  title,
  onSelectMeal,
  duration,
  affordability,
  complexity,
  imageUrl,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={{ padding: 10 }}>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{duration}</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItems;

// Styles
const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    borderRadius: 30,
    overflow: "hidden",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0 , 0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

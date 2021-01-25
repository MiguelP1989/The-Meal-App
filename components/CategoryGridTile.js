// Third-party imports
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const TouchableComp = ({ children, style, onPress }) => {
  // Props
  const touchCompoProps = {
    style: style,
    onPress: onPress,
    children,
  };
  return Platform.OS === "androind" && Plataform.Version >= 2 ? (
    <TouchableNativeFeedback {...touchCompoProps} />
  ) : (
    <TouchableOpacity {...touchCompoProps} />
  );
};

const CategoryGridTile = ({ title, color, onSelect }) => {
  // Props
  const touchableOpacityProps = {
    style: styles.gridItem,
    onPress: onSelect,
  };
  return (
    <TouchableComp {...touchableOpacityProps}>
      <View style={{ backgroundColor: color, ...styles.container }}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableComp>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
});

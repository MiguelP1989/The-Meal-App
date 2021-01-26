// Third-party imports
import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

// Global imports
import Colors from "../constants/Colors";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const FilterSwitch = ({ state, label, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor, false: "grey" }}
        thumbColor={Colors.primaryColor}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

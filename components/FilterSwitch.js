// Third-party imports
import React from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

// Global imports
import Colors from "../constants/Colors";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FilterSwitch
 * @description Component to render each filter switch
 * @param {Bollean} state - Determines if the user selected the filter on or not.
 * @param {String} label - It renders the name for each switch.
 * @param {Function} onChange - verifys if the user change the state of eatch switch.
 */
const FilterSwitch = ({ state, label, onChange }) => {
  // Props
  const switchProps = {
    trackColor: { true: Colors.primaryColor, false: "grey" },
    thumbColor: Colors.primaryColor,
    value: state,
    onValueChange: onChange,
  };

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>{label}</Text>
      <Switch {...switchProps} />
    </View>
  );
};

export default FilterSwitch;

// Styles
const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

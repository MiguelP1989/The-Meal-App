// Third-party imports
import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

// Global imports
import Colors from "../constants/Colors";

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function CustomHeaderButton
 * @description It renders the HeaderButtom component.
 */
const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;

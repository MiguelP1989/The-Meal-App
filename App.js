// Third-party imports
import React, { useState } from "react";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { Text, View } from "react-native";

// Global imports
import MealsNavigator from "./navigation/MealsNavigation";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <Apploading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <MealsNavigator />;
};

export default App;

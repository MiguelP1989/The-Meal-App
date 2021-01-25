// Third-party imports
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Global imports
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

// Local imports

////////////////////////////////////////////////////////////////////////////////

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetails: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);

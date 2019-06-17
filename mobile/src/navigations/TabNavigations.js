import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import Restaurants from "../components/screens/Restaurants/Restaurants";
import Dish from "../components/screens/Dishes/Dish";
import Cart from "../components/screens/Cart/Cart";

const TabNavigations = createBottomTabNavigator({
  Restaurant: {
    screen: Restaurants,
    navigationOptions: {
      tabBarLabel: "Заклади",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-restaurant" size={24} />
      )
    }
  },
  Dish: {
    screen: Dish,
    navigationOptions: {
      tabBarLabel: "Страви",
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-pizza" size={24} />
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: "Корзина",
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-cart" size={24} />
    }
  }
});

export default createAppContainer(TabNavigations);

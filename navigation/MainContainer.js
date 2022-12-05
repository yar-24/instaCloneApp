import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Shopicon from "react-native-vector-icons/MaterialCommunityIcons";

//screen
import Home from "./screens/Home";
import Reels from "./screens/Reels";
import Search from "./screens/Search";
import Toko from "./screens/Toko";
import User from "./screens/User";

//screen names
const homeName = "HomeScreen";
const reelsName = "RellsScreen";
const searchName = "SeacrhScreen";
const tokoName = "TokoScreen";
const userName = "UserScreen";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            height: 60,
            borderTopColor: false
          },
      
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === reelsName) {
              iconName = focused
                ? "md-duplicate-sharp"
                : "md-duplicate-outline";
            } else if (rn === searchName) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === tokoName) {
              iconName = focused ? "basket" : "basket-outline";
            } else if (rn === userName) {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color="#fff" />;
          },
        })}
      >
        <Tab.Screen
          options={{ tabBarShowLabel: false }}
          name={homeName}
          component={Home}
        />
        <Tab.Screen
          options={{ tabBarShowLabel: false }}
          name={searchName}
          component={Search}
        />
        <Tab.Screen
          options={{ tabBarShowLabel: false }}
          name={reelsName}
          component={Reels}
        />
        <Tab.Screen
          options={{ tabBarShowLabel: false }}
          name={tokoName}
          component={Toko}
        />
        <Tab.Screen
          options={{ tabBarShowLabel: false }}
          name={userName}
          component={User}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

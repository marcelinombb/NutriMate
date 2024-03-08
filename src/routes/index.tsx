import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Recipes from "../pages/Recipes";
import Diary from "../pages/Diary";

export type PropsNavigationStack = {
  Login: undefined;
  Home: undefined;
  Diary: undefined;
  Recipes: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator();
export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Diary" component={Diary} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

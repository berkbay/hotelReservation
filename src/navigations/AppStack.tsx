import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { HomeScreen } from "../screens/AppFlow/HomeScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;

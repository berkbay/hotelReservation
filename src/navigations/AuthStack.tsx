import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { WelcomeScreen } from "../screens/AuthFlow/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

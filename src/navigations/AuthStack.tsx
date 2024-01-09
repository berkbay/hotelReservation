import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import LoginScreen from "../screens/AuthFlow/LoginScreen";
import RegisterScreen from "../screens/AuthFlow/RegisterScreen";
import WelcomeScreen from "../screens/AuthFlow/WelcomeScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { RootReducerState } from "../store/types";

export default function Router() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthStack />
        {/*<AppStack />*/}
      </SafeAreaView>
    </NavigationContainer>
  );
}

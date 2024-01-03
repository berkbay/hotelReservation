import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import AuthStack from "./AuthStack";

export default function MainNavigationContainer() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <AuthStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

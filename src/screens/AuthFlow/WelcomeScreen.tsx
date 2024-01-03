import * as React from "react";
import { Text, View } from "react-native";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { themeColor } from "../../utils/styles";

export const WelcomeScreen = () => {
  return (
    <>
      <Header title="WelcomeScreen" />
      <Button title="Merhaba" onPress={() => console.log("nice")} disabled />
      <Input />
    </>
  );
};

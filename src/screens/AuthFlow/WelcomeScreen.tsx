import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Button from "../../components/Button";
import { themeColor } from "../../utils/styles";

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Otel Rezervasyon Uygulamasına Hoşgeldiniz
      </Text>
      <Image
        source={require("../../../assets/ORLogo.jpeg")}
        style={styles.logoStyle}
      />
      <Button
        title="Giriş Yap"
        onPress={() => navigation.push("LoginScreen")}
      />
      <Button
        title="Kayıt Ol"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  welcomeText: {
    fontSize: 32,
    lineHeight: 44,
    color: themeColor.primaryColor,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  logoStyle: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 30,
  },
});

import { useState } from "react";
import { Image, Text, View } from "react-native";

import { User } from "./types";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

const LoginScreen = () => {
  const [user, setUser] = useState<User>();
  const handleOnChangeInput = (text: string, field: string) => {
    setUser({ ...user, [field]: text });
  };
  return (
    <>
      <Header title="Giriş Yap" />
      <View>
        <Image
          source={require("./assets/loginScreen.webp")}
          style={{ width: 300, height: 300, alignSelf: "center" }}
          resizeMode="contain"
        />
        <Input placeholder="Kullanıcı Adı" />
        <Input placeholder="Şifre" secureTextEntry />
        <Button title="Giriş Yap" onPress={() => console.log("Giriş Yap")} />
      </View>
    </>
  );
};

export default LoginScreen;

import { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { User } from "./types";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { loginUser } from "../../store/actions/userActions";
import { LoginUserAction } from "../../store/types";

const LoginScreen = () => {
  const [user, setUser] = useState<User>();
  const dispacth: Dispatch<LoginUserAction> = useDispatch();

  const handleOnChangeInput = (text: string, field: string) => {
    setUser({ ...user, [field]: text });
  };

  const handleLogin = useCallback(() => {
    if (user) {
      const serviceObject = Object.assign({}, user);
      dispacth(loginUser(serviceObject));
    }
  }, [user]);

  return (
    <>
      <Header title="Giriş Yap" />
      <View>
        <Image
          source={require("./assets/loginScreen.webp")}
          style={{ width: 300, height: 300, alignSelf: "center" }}
          resizeMode="contain"
        />
        <Input
          placeholder="TC Kimlik Numarası"
          keyboardType="number-pad"
          onChangeText={(text) => handleOnChangeInput(text, "tcNo")}
        />
        <Input
          placeholder="Şifre"
          secureTextEntry
          onChangeText={(text) => handleOnChangeInput(text, "password")}
        />
        <Button title="Giriş Yap" onPress={() => handleLogin()} />
      </View>
    </>
  );
};

export default LoginScreen;

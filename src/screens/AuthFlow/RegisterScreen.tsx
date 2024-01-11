import { useCallback, useState } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { User } from "./types";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { registerUser } from "../../store/actions/userActions";
import { RegisterUserAction } from "../../store/types";

const RegisterScreen = () => {
  const dispacth: Dispatch<RegisterUserAction> = useDispatch();

  const [user, setUser] = useState<User>();

  const handleRegister = useCallback(() => {
    if (user) {
      const serviceObject = Object.assign({}, user);
      delete serviceObject["passwordAgain"];
      dispacth(registerUser(serviceObject));
    }
  }, [user]);

  function handleDisableButton() {
    return !(
      user &&
      user?.tcNo &&
      user?.city &&
      user?.fullName &&
      user?.phoneNumber &&
      user?.password &&
      user?.passwordAgain &&
      user?.password === user?.passwordAgain
    );
  }

  const handleOnChangeInput = (text: string, field: string) => {
    setUser({ ...user, [field]: text });
  };

  return (
    <>
      <Header title="Kayıt Ol" />
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        enableOnAndroid
        extraScrollHeight={20}
      >
        <Image
          source={require("./assets/RegisterScreen.avif")}
          style={{ width: 300, height: 300, alignSelf: "center" }}
          resizeMode="contain"
        />
        <Input
          placeholder="Ad-Soyad"
          onChangeText={(text) => handleOnChangeInput(text, "fullName")}
        />
        <Input
          placeholder="Yaşadığınız Şehir"
          onChangeText={(text) => handleOnChangeInput(text, "city")}
        />
        <Input
          placeholder="Telefon Numarası"
          keyboardType="number-pad"
          onChangeText={(text) => handleOnChangeInput(text, "phoneNumber")}
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
        <Input
          placeholder="Şifre Tekrar"
          secureTextEntry
          onChangeText={(text) => handleOnChangeInput(text, "passwordAgain")}
        />
        <Button
          title="Kayıt Ol"
          onPress={() => handleRegister()}
          disabled={handleDisableButton()}
        />
      </KeyboardAwareScrollView>
    </>
  );
};

export default RegisterScreen;

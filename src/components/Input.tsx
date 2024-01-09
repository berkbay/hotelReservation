import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInputProps,
} from "react-native";

import { themeColor } from "../utils/styles";

interface Props extends TextInputProps {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  iconPress?: Function;
}

const Input = React.forwardRef((props: Props, ref) => {
  const { leftIcon, iconPress, secureTextEntry, ...restOfProps } = props;

  const [secureText, setSecureText] = useState<boolean | undefined>(
    secureTextEntry,
  );

  const rightIcon = secureText ? "eye" : "eye-off";
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity
          disabled={!iconPress}
          style={styles.iconStyle}
          onPress={() => iconPress && iconPress()}
        >
          <Ionicons
            name={leftIcon}
            size={24}
            color={themeColor.secondaryColor}
          />
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.textInputStyle}
        {...restOfProps}
        secureTextEntry={secureText}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => setSecureText(!secureText)}
        >
          <Ionicons
            name={rightIcon}
            size={24}
            color={themeColor.secondaryColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themeColor.white,
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  iconStyle: { marginHorizontal: 3, paddingVertical: 9, paddingHorizontal: 12 },
  textInputStyle: {
    paddingHorizontal: 10,
    fontSize: 14,
    lineHeight: 18,
    color: themeColor.darkGrey,
    fontWeight: "500",
    flex: 1,
  },
});

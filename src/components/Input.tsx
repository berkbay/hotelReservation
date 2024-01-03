import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

import { themeColor } from "../utils/styles";

interface Props {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  iconPress?: Function;
}

const Input = React.forwardRef((props: Props, ref) => {
  const { leftIcon, iconPress, ...restOfProps } = props;
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
      <TextInput style={styles.textInputStyle} {...restOfProps} />
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themeColor.lightGrey,
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  iconStyle: { marginHorizontal: 3, paddingVertical: 9, paddingHorizontal: 12 },
  textInputStyle: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: themeColor.darkGrey,
    fontWeight: "500",
    flex: 1,
  },
});

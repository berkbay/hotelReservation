import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import { themeColor } from "../utils/styles";

interface Props {
  title: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  leftIconPress?: Function;
  rightIconPress?: Function;
  leftButtonHide?: boolean;
}

const Header: React.FC<Props> = (props) => {
  const {
    title,
    leftIconPress,
    leftIcon = "arrow-back-sharp",
    rightIcon,
    rightIconPress,
    leftButtonHide,
    ...restOfProps
  } = props;
  const navigation = useNavigation<any>();
  const { white } = themeColor;
  return (
    <View style={styles.customHeaderView} {...restOfProps}>
      {leftButtonHide ? (
        <View style={styles.customHeaderItem} />
      ) : (
        <Pressable
          style={styles.customHeaderItem}
          onPress={() => {
            !leftIconPress ? navigation.goBack() : leftIconPress();
          }}
        >
          <Ionicons name={leftIcon} size={24} color={white} />
        </Pressable>
      )}
      <View style={{ flex: 6 }}>
        <Text numberOfLines={1} style={styles.customHeaderText}>
          {title}
        </Text>
      </View>
      {!rightIconPress ? (
        <View style={styles.customHeaderItem} />
      ) : (
        <Pressable
          disabled={!rightIconPress}
          style={styles.customHeaderItem}
          onPress={() => {
            rightIconPress();
          }}
        >
          <Ionicons name={rightIcon} size={30} color={white} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  customHeaderView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    backgroundColor: themeColor.primaryColor,
  },
  customHeaderText: {
    color: themeColor.white,
    marginHorizontal: 10,
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
  customHeaderItem: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

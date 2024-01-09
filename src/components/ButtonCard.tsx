import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import {
  Text,
  TouchableOpacityProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { themeColor } from "../utils/styles";

interface Props extends TouchableOpacityProps {
  iconName?: keyof typeof Ionicons.glyphMap;
  title: string;
  content?: string;
  buttonColor?: string;
}

const ButtonCard: React.FC<Props> = (props) => {
  const { iconName, title, content, buttonColor, ...restOfProps } = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: buttonColor ?? themeColor.darkerYellow },
      ]}
      {...restOfProps}
    >
      {iconName && (
        <Ionicons name={iconName} size={40} color={themeColor.white} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCard;

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  textContainer: { flex: 1, marginLeft: 10 },
  title: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "700",
    color: themeColor.white,
  },
  content: {
    fontSize: 14,
    lineHeight: 22,
    color: themeColor.white,
  },
});

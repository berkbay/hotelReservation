import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { themeColor } from "../utils/styles";

interface Props {
  title: string;
  onPress: Function;
  disabled?: boolean;
}
const Button: React.FC<Props> = (props) => {
  const { title, onPress, disabled, ...restOfProps } = props;
  const { secondaryColor, grey } = themeColor;

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: disabled ? grey : secondaryColor },
      ]}
      onPress={() => onPress()}
      disabled={disabled}
      {...restOfProps}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 3,
  },
  buttonText: {
    color: themeColor.white,
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
});

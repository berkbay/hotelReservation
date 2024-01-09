import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { themeColor } from "../utils/styles";

interface Props extends TouchableOpacityProps {
  title: string;
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
      onPress={onPress}
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
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 16,
  },
  buttonText: {
    color: themeColor.white,
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
});

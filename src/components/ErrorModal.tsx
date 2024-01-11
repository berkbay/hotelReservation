import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Button from "./Button";
import { setGlobalModal } from "../store/actions/globalActions";
import { GlobalModalAction, RootReducerState } from "../store/types";
import { themeColor } from "../utils/styles";

const ErrorModal = (props: any) => {
  const { type, info } = useSelector(
    (state: RootReducerState) => state.globalModal,
  );

  const dispacth: Dispatch<GlobalModalAction> = useDispatch();
  const icon = type === "success" ? "checkmark" : "alert";
  const iconColor =
    type === "success" ? themeColor.secondaryColor : themeColor.darkerYellow;

  return (
    <Modal
      transparent
      animationType="none"
      visible={!!type}
      onRequestClose={() => {}}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalMessageContainer}>
          <Ionicons name={`${icon}-circle`} size={60} color={iconColor} />
          <Text style={{ fontSize: 18, fontWeight: "700", lineHeight: 26 }}>
            {info}
          </Text>
          <Button
            title="Tamam"
            onPress={() => dispacth(setGlobalModal({ type: undefined }))}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalMessageContainer: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default ErrorModal;

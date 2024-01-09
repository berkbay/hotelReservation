import React, { Component, useEffect } from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";

import { RootReducerState } from "../store/types";
import { themeColor } from "../utils/styles";

const Loader = (props: any) => {
  const { loading } = useSelector(
    (state: RootReducerState) => state.globalLoading,
  );

  console.log("loading", loading);

  return (
    <Modal
      transparent
      animationType="none"
      visible={loading}
      onRequestClose={() => {
        // console.log("close modal");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            animating={loading}
            color={themeColor.secondaryColor}
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
    opacity: 1,
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    padding: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Loader;

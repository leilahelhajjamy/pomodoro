import React from "react";
import { View, StyleSheet } from "react-native";
import { AddAlarm } from "../features/alarm/AddAlarm";
import { Sounds } from "../features/alarm/Sounds";
export const Alarms = (props) => {
  return (
    <View style={styles.container}>
      <AddAlarm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

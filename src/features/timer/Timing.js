import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timers}>
      <View>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
      </View>
      <View>
        <RoundedButton title="15" size={75} onPress={() => onChangeTime(15)} />
      </View>
      <View>
        <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

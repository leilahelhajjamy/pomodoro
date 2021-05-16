import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { MinutePicker } from "../../components/MinutePicker";
import { HourPicker } from "../../components/HourPicker";
import { Sounds } from "./Sounds";
import { Repetition } from "./Repetition";
import { DurationSound } from "./DurationSound";
import AppLoading from "expo-app-loading";
export const AddAlarm = (props) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [sound, setSound] = useState("");

  let [fontsLoaded] = useFonts({
    "digital-7": require("../../../assets/fonts/digital-7.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          {/* <Text style={{ fontFamily: "digital-7", fontSize: 40 }}>
            {hour >= 10 ? hour : `0${hour}`}:
            {minute >= 10 ? minute : `0${minute}`}
          </Text> */}

          <View
            style={{
              height: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HourPicker onSetHour={setHour} />
            <MinutePicker onSetMinute={setMinute} />
          </View>
        </View>
        <View style={styles.listSettings}>
          <Text>{sound}</Text>
          <Sounds onSetSound={setSound} />
          <Repetition />
          <DurationSound />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listSettings: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

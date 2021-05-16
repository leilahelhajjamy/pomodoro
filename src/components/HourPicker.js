import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/Colors";

export const HourPicker = ({ onSetHour }) => {
  const [hour, setHour] = useState(12);

  let [fontsLoaded] = useFonts({
    "digital-7": require("../../assets/fonts/digital-7.ttf"),
  });

  useEffect(() => {
    if (hour < 24 && hour >= 0) {
      setHour(hour);
      onSetHour(hour);
    }
  }, [hour]);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {hour > 0 && (
            <TouchableOpacity
              style={{ marginRight: 12 }}
              onPress={() => {
                if (hour - 1 >= 0) {
                  setHour(hour - 1);
                }
              }}
            >
              <Ionicons
                name="caret-back-outline"
                size={30}
                color={colors.bgDarker}
              />
            </TouchableOpacity>
          )}
          {hour > 1 && (
            <Text
              style={{ fontFamily: "digital-7", fontSize: 20, marginRight: 3 }}
            >
              {hour >= 12 ? hour - 2 : `0${hour - 2}`}
            </Text>
          )}
          {hour > 0 && (
            <Text style={{ fontFamily: "digital-7", fontSize: 35 }}>
              {hour >= 11 ? hour - 1 : `0${hour - 1}`}
            </Text>
          )}
          <View style={[styles.fadingContainer]}>
            <Text
              style={{
                fontFamily: "digital-7",
                fontSize: 50,
              }}
            >
              {hour >= 10 ? hour : `0${hour}`}
            </Text>
          </View>
          {hour < 23 && (
            <Text style={{ fontFamily: "digital-7", fontSize: 35 }}>
              {!(hour < 9) ? hour + 1 : `0${hour + 1}`}
            </Text>
          )}
          {hour < 22 && (
            <Text
              style={{ fontFamily: "digital-7", fontSize: 20, marginLeft: 3 }}
            >
              {!(hour < 8) ? hour + 2 : `0${hour + 2}`}
            </Text>
          )}
          {hour < 23 && (
            <TouchableOpacity
              style={{ marginLeft: 12 }}
              onPress={() => {
                if (hour + 1 < 24) {
                  setHour(hour + 1);
                }
              }}
            >
              <Ionicons
                name="caret-forward-outline"
                size={30}
                color={colors.bgDarker}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  fadingContainer: {
    height: 65,
    width: 65,
    backgroundColor: colors.bgDarker,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 3,
  },
});

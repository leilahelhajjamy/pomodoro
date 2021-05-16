import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/Colors";

export const MinutePicker = ({ onSetMinute }) => {
  const [minute, setMinute] = useState(12);

  let [fontsLoaded] = useFonts({
    "digital-7": require("../../assets/fonts/digital-7.ttf"),
  });

  useEffect(() => {
    if (minute < 60 && minute >= 0) {
      setMinute(minute);
      onSetMinute(minute);
    }
  }, [minute]);

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
          {minute > 0 && (
            <TouchableOpacity
              style={{ marginRight: 12 }}
              onPress={() => {
                if (minute - 1 >= 0) {
                  setMinute(minute - 1);
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
          {minute > 1 && (
            <Text
              style={{ fontFamily: "digital-7", fontSize: 20, marginRight: 3 }}
            >
              {minute >= 12 ? minute - 2 : `0${minute - 2}`}
            </Text>
          )}
          {minute > 0 && (
            <Text style={{ fontFamily: "digital-7", fontSize: 35 }}>
              {minute >= 11 ? minute - 1 : `0${minute - 1}`}
            </Text>
          )}
          <View style={[styles.fadingContainer]}>
            <Text
              style={{
                fontFamily: "digital-7",
                fontSize: 50,
              }}
            >
              {minute >= 10 ? minute : `0${minute}`}
            </Text>
          </View>
          {minute < 59 && (
            <Text style={{ fontFamily: "digital-7", fontSize: 35 }}>
              {!(minute < 9) ? minute + 1 : `0${minute + 1}`}
            </Text>
          )}
          {minute < 58 && (
            <Text
              style={{ fontFamily: "digital-7", fontSize: 20, marginLeft: 3 }}
            >
              {!(minute < 8) ? minute + 2 : `0${minute + 2}`}
            </Text>
          )}
          {minute < 59 && (
            <TouchableOpacity
              style={{ marginLeft: 12 }}
              onPress={() => {
                if (minute + 1 < 95) {
                  setMinute(minute + 1);
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

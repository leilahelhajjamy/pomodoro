import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../utils/Colors";
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).title, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      height: size,
      width: size,
      alignItems: "center",
      borderColor: colors.white,
      borderWidth: 2,
      justifyContent: "center",
    },
    title: {
      color: colors.white,
      fontSize: size / 3,
    },
  });

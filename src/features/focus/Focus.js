import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { spacing, fontSizes } from "../../utils/Sizes";
import { colors } from "../../utils/Colors";
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What whould you like to focus on ?</Text>
        <View style={styles.focusItem}>
          <View style={{ width: "90%", paddingHorizontal: 20 }}>
            <TextInput
              style={styles.input}
              onChangeText={setSubject}
              placeholder="useless placeholder"
            />
          </View>
          <View>
            <RoundedButton
              title="+"
              size={50}
              onPress={() => {
                addSubject(subject);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",
  },
  title: {
    fontSize: fontSizes.md,
    color: colors.brown,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  focusItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

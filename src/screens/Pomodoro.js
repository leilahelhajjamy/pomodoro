import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Focus } from "../features/focus/Focus";
import { colors } from "../utils/Colors";
import { Timer } from "../features/timer/Timer";
import { spacing } from "../utils/Sizes";
import { FocusHistory } from "../features/focus/FocusHistory";

export const Pomodoro = (props) => {
  const STATUSES = {
    completed: 1,
    cancelled: 2,
  };
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };
  const onClear = () => {
    setFocusHistory([]);
  };
  useEffect(() => {
    //happen only one time , on the mount
    loadSubjectHistory();
  }, []);

  useEffect(() => {
    storeListSubject();
  }, [focusHistory]);

  const storeListSubject = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (error) {
      console.log(error);
    }
  };
  const loadSubjectHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history != null) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(focusHistory);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
            addFocusHistorySubjectWithStatus(focusSubject, STATUSES.completed);
          }}
          onClearSubject={() => {
            setFocusSubject(null);
            addFocusHistorySubjectWithStatus(focusSubject, STATUSES.cancelled);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
    paddingTop: Platform.OS === "ios" ? spacing.md : spacing.lg,
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Vibration,
  Platform,
  TouchableOpacity,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../../utils/Colors";
import { fontSizes } from "../../utils/Sizes";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { Timing } from "../../features/timer/Timing";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ focusSubject, onTimerEnd, onClearSubject }) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const onProgress = (progress) => {
    setProgress(progress);
  };
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  const endTime = () => {
    vibrate();
    setMinutes(15);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      // Vibration.vibrate(5000);
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    }
  };
  return (
    <View style={styles.container}>
      <Countdown
        minutes={minutes}
        isPaused={!isStarted}
        onProgress={onProgress}
        onEnd={endTime}
      />
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="pause"
            size={50}
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundedButton
            title="start"
            size={50}
            onPress={() => setIsStarted(true)}
          />
        )}
      </View>
      <View style={{ paddingTop: 20 }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View>
        <RoundedButton title="start" size={40} onPress={onClearSubject} />
      </View>

      <Text style={styles.title}>We are focusing on :</Text>
      <Text style={{ fontSize: fontSizes.lg }}> {focusSubject}</Text>
    </View>
  );
};

export default Timer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.brown,
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
});

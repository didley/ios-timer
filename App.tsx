import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TimerBtn } from "./components/TimerBtn";
import { useNotification } from "./components/useNotification";
import { useTimer } from "./components/useTimer";
import { useVibrate } from "./components/useVibrate";

export default function App() {
  const [timer, status, reset] = useTimer({
    initialMinute: 1,
    initialSeconds: 0,
  });

  const [vibrating, setVibrating] = useVibrate(false);

  const setNotification = useNotification();

  const DEFAULT_MINUTES = [1, 3, 5, 10, 15, 30, 45, 60];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.btnContainer}>
        {DEFAULT_MINUTES.map((minute) => (
          <View style={styles.btn} key={minute}>
            <TimerBtn
              minutes={minute}
              seconds={0}
              onPress={() => setNotification(minute * 60)}
            />
          </View>
        ))}
      </View>

      {/* <Text>{timer && timer}</Text>
      {status === "complete" && (
        <Button title="reset" onPress={() => reset()} />
      )} */}

      <Button title="Set 1s notification" onPress={() => setNotification(1)} />

      <Button
        title={vibrating ? "Stop" : "Start"}
        onPress={() => setVibrating(!vibrating)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: { margin: 10 },
});

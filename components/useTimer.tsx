import { useEffect, useState } from "react";
import { Vibration } from "react-native";

export const useTimer = ({ initialMinute = 0, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [status, setStatus] = useState<"running" | "paused" | "complete">(
    "running"
  );

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          setStatus("complete");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [initialMinute, initialSeconds, minutes, seconds, status, setStatus]);

  useEffect(() => {
    if (status === "complete") {
      const ONE_SECOND_IN_MS = 1000;
      const PATTERN = [ONE_SECOND_IN_MS, ONE_SECOND_IN_MS];
      Vibration.vibrate(PATTERN, true);
    } else {
      Vibration.cancel();
    }
  }, [status]);

  const timerString =
    minutes === 0 && seconds === 0
      ? null
      : `${minutes < 10 ? `0${minutes}` : minutes}:
          ${seconds < 10 ? `0${seconds}` : seconds}`;

  const reset = () => {
    setStatus("paused");
    setMinutes(initialMinute);
    setSeconds(initialSeconds);
  };

  return [timerString, status, reset];
};

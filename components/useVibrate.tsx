import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Vibration } from "react-native";

export const useVibrate = (
  vibrating = false
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [_vibrating, _setVibrating] = useState<boolean>(vibrating);

  useEffect(() => {
    if (_vibrating) {
      const ONE_SECOND_IN_MS = 1000;
      const PATTERN = [0, ONE_SECOND_IN_MS, ONE_SECOND_IN_MS];
      Vibration.vibrate(PATTERN, true);
    } else {
      Vibration.cancel();
    }
  }, [_vibrating, _setVibrating]);

  return [_vibrating, _setVibrating];
};

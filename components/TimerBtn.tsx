import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  minutes: number;
  seconds: number;
  onPress: () => void;
};

export const TimerBtn = ({ minutes, seconds, onPress }: Props) => {
  return (
    <Pressable style={styles.outerContainer} onPress={onPress}>
      <View style={styles.innerContainer}>
        <Text style={{ color: "orange", fontSize: 30, fontWeight: "bold" }}>
          {minutes}
        </Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {minutes > 1 ? "MINS" : "MIN"}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#2f2f2f",
    width: 100,
    height: 100,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    borderColor: "#8a8a8a",
    borderWidth: 2,
    borderRadius: 200,
    width: 82,
    height: 82,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
  },
});

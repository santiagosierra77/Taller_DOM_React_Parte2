import { StyleSheet, View } from "react-native";

export function AnimatedSplashOverlay() {
  return null;
}

export function AnimatedIcon() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128,
    alignItems: "center",
    justifyContent: "center",
  },
});

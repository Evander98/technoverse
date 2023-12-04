import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const NotificationBadge = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: -8,
    top: -9,
    backgroundColor: colors.red,
    width: 18,
    height: 18,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "600",
  },
});

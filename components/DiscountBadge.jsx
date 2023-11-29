import { StyleSheet, View } from "react-native";
import { Text } from "./Styled";
import { colors } from "../constants/colors";

export const DiscountBadge = ({ discount }) => {
  if (!discount) return null;

  return (
    <View style={styles.discountBadge}>
      <Text style={styles.discount}>-{discount}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  discountBadge: {
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: colors.discount,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  discount: {
    fontSize: 12,
    color: colors.white,
    fontFamily: "GraficalSemiBold",
    fontWeight: "600",
  },
});

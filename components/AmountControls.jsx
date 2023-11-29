import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AddCircle, SubstractCircle } from "../assets/icons";
import { Text } from "./Styled";

export const AmountControls = ({ onSubtract, onAdd, amount, isHorizontal }) => {
  return (
    <View style={styles.amountWrapper(isHorizontal)}>
      <TouchableOpacity onPress={onSubtract}>
        <SubstractCircle />
      </TouchableOpacity>
      <Text style={styles.amountText}>{amount}</Text>
      <TouchableOpacity onPress={onAdd}>
        <AddCircle />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  amountWrapper: (isHorizontal) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginVertical: isHorizontal ? 0.5 : 5.5,
  }),
  amountText: {
    marginHorizontal: 12,
  },
});

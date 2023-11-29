import { Image, StyleSheet, View } from "react-native";
import { Text } from "./Styled";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../constants/colors";
import { dimensions } from "../constants/dimensions";

export const ShoppingNowCard = ({ image, title, description, buttonText }) => {
  return (
    <View style={styles.card}>
      <View style={styles.bodyWrapper}>
        <Image source={image} />
        <View style={styles.detailWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: dimensions.cardWidth,
  },
  bodyWrapper: {
    backgroundColor: colors.white,
    elevation: 4,
    shadowColor: colors.cardShadow,
    shadowOpacity: 1,
    shadowRadius: 24,
    borderRadius: 6,
    overflow: "hidden",
  },
  detailWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(127, 174, 27, 0.75)",
    padding: 10,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    color: colors.white,
    lineHeight: 16.8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: colors.primaryText,
    height: 34,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
});

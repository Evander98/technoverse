import {
  Text as DefaultText,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { spacing } from "../constants/spacing";
import { colors } from "../constants/colors";

export const Text = ({ style, ...props }) => {
  return <DefaultText {...props} style={[style, styles.text]} />;
};

export const Container = ({ style, ...props }) => {
  return <View {...props} style={[style, styles.container]} />;
};

export const Card = ({ style, touchable, ...props }) => {
  const CardComponent = touchable ? TouchableOpacity : View;

  return <CardComponent {...props} style={[styles.card, style]} />;
};

const styles = StyleSheet.create({
  text: { fontFamily: "Grafical", margin: 2 },
  container: { paddingHorizontal: spacing.paddingHorizontal },
  card: {
    borderRadius: 6,
    backgroundColor: colors.white,
    shadowColor: colors.cardShadow,
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 4,
  },
});

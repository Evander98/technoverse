import { Dimensions } from "react-native";
import { spacing } from "./spacing";

export const dimensions = {
  windowWidth: Dimensions.get("window").width,
  cardWidth: (Dimensions.get("window").width - spacing.paddingHorizontal * 2 - spacing.gap) / 2,
};
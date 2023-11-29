import { StyleSheet, View } from "react-native";
import { topCards } from "../constants/home";
import { Card, Text } from "./Styled";
import { ChevronRight } from "../assets/icons";
import { spacing } from "../constants/spacing";
import { colors } from "../constants/colors";

export const TopCards = () => {
  return (
    <View style={styles.container}>
      {topCards.map(({ prefix: Prefix, label, content, description }) => (
        <Card key={label} style={styles.cardWrapper} touchable>
          <Prefix style={styles.prefix} />
          <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <ChevronRight />
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    gap: spacing.gap,
  },
  cardWrapper: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: colors.gray,
    fontSize: 12,
  },
  content: {
    color: colors.primaryText,
    lineHeight: 14,
  },
  description: {
    color: colors.green,
    fontSize: 12,
  },
  prefix: {
    color: colors.red,
  },
});

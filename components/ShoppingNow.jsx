import { StyleSheet } from "react-native";
import { Container } from "./Styled";
import { ShoppingNowCard } from "./ShoppingNowCard";
import { shoppingNowData } from "../constants/home";
import { spacing } from "../constants/spacing";

export const ShoppingNow = () => {
  return (
    <Container style={styles.container}>
      {shoppingNowData.map(({ id, ...data }) => (
        <ShoppingNowCard key={id} {...data} />
      ))}
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    marginVertical: 20,
    gap: spacing.gap,
  },
});

import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Container, Text } from "./Styled";
import { ProductCard } from "./ProductCard";
import { freshProducts } from "../constants/home";
import { spacing } from "../constants/spacing";
import { colors } from "../constants/colors";

export const ProductsSection = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>All Fresh Market</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productList}>
        {freshProducts.map(({ id, ...product }) => (
          <ProductCard key={id} {...product} />
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: colors.primaryText,
    fontSize: 18,
  },
  seeAllText: {
    color: colors.red,
  },
  productList: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    marginTop: 20,
    gap: spacing.gap,
  },
});

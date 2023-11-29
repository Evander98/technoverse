import { WavesBottom, WavesTop } from "../assets/images";
import { Text } from "./Styled";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import { ProductCard } from "./ProductCard";
import { specialProducts } from "../constants/home";
import { spacing } from "../constants/spacing";
import { colors } from "../constants/colors";

export const SpecialSection = () => {
  const reversedProducts = [...specialProducts].reverse();
  return (
    <View style={styles.container}>
      <Image source={WavesTop} style={styles.waves} />
      <View style={styles.contentWrapper}>
        <View style={styles.row}>
          <Text style={styles.label}>Today’s Specials</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productContainer}>
          <FlatList
            data={specialProducts}
            renderItem={({ item, index }) => (
              <ProductCard key={item.id} {...item} index={index} horizontal />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={reversedProducts}
            renderItem={({ item, index }) => (
              <ProductCard key={item.id} {...item} index={index} horizontal />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <Image source={WavesBottom} style={styles.waves} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  waves: {
    width: "100%",
  },
  contentWrapper: {
    marginTop: -2,
    backgroundColor: colors.green,
  },
  row: {
    paddingHorizontal: spacing.paddingHorizontal,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    color: colors.white,
    fontSize: 18,
  },
  seeAllText: {
    color: colors.white,
  },
  productContainer: { gap: spacing.gap },
});

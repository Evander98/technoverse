import { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Card, Text } from "./Styled";
import { formatCurrency } from "../utils";
import { CartPlus } from "../assets/icons";
import { colors } from "../constants/colors";
import { dimensions } from "../constants/dimensions";
import { DiscountBadge } from "./DiscountBadge";
import { AmountControls } from "./AmountControls";
import { spacing } from "../constants/spacing";

export const ProductCard = ({
  index,
  image,
  title,
  price,
  discount,
  discountedPrice,
  total,
  horizontal: isHorizontal,
}) => {
  const [amount, setAmount] = useState(0);

  return (
    <Card
      style={[
        styles.card,
        isHorizontal ? styles.horizontalCard(index) : styles.verticalCard,
      ]}
    >
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.discountWrapper}>
          {discount ? (
            <>
              <DiscountBadge discount={discount} />
              <Text style={styles.discountedPrice}>
                {formatCurrency(discountedPrice)}
              </Text>
            </>
          ) : null}
        </View>
        <View style={isHorizontal && styles.footerWrapper}>
          <Text style={styles.total}>{formatCurrency(total)}</Text>
          {amount ? (
            <AmountControls
              onSubtract={() => setAmount((prev) => prev - 1)}
              onAdd={() => setAmount((prev) => prev + 1)}
              amount={amount}
              isHorizontal={isHorizontal}
            />
          ) : (
            <TouchableOpacity
              style={[styles.button, !isHorizontal && styles.verticalButton]}
              onPress={() => setAmount((prev) => prev + 1)}
            >
              <CartPlus />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  horizontalCard: (index) => {
    let style = {
      flexDirection: "row",
      width: dimensions.windowWidth - spacing.marginHorizontal - 9 * 2,
      marginRight: 10,
    };
    if (index === 0) style.marginLeft = spacing.marginHorizontal;
    return style;
  },
  verticalCard: {
    width: dimensions.cardWidth,
  },
  image: {
    width: 110,
    height: 110,
    marginHorizontal: 15,
    resizeMode: "contain",
    alignSelf: "center",
  },
  details: {
    flex: 1,
  },
  title: {
    color: colors.primaryText,
    marginTop: 4,
  },
  price: {
    color: colors.gray,
    fontSize: 12,
    marginBottom: 5,
    flex: 1,
  },
  discountWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  discountedPrice: {
    fontSize: 12,
    color: colors.discount,
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  total: {
    fontSize: 16,
    color: colors.red,
    fontWeight: "600",
  },
  button: {
    padding: 5,
    borderRadius: 6,
    backgroundColor: colors.green,
    alignItems: "center",
  },
  footerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  verticalButton: {
    marginTop: 10,
  },
});

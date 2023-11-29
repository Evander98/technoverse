import { ScrollView, StyleSheet, View } from "react-native";
import { Header } from "../../components/Header";
import { heroCarouselData } from "../../constants/home";
import { HeroCarousel } from "../../components/HeroCarousel";
import { TopCards } from "../../components/TopCards";
import { ProductsSection } from "../../components/ProductsSection";
import { ShoppingNow } from "../../components/ShoppingNow";
import { SpecialSection } from "../../components/SpecialSection";
import { colors } from "../../constants/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <TopCards />
        <HeroCarousel data={heroCarouselData} />
        <ShoppingNow />
        <SpecialSection />
        <ProductsSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

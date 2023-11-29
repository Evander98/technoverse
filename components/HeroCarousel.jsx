import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../constants/colors";
import { dimensions } from "../constants/dimensions";
import { spacing } from "../constants/spacing";

export const HeroCarousel = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flatListRef = useRef();

  const onScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / width);
    setSelectedIndex(index);
  };

  const handleIndicatorPress = (index) => {
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.image} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />

      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.indicator,
              index === selectedIndex && styles.activeIndicator,
            ]}
            onPress={() => handleIndicatorPress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const width = dimensions.windowWidth - spacing.marginHorizontal * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    marginHorizontal: spacing.marginHorizontal,
    borderRadius: 6,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  indicator: {
    marginHorizontal: 2.5,
    width: "6.4%",
    height: 5,
    backgroundColor: colors.solitude,
    borderRadius: 4,
  },
  activeIndicator: {
    backgroundColor: colors.activeTintColor,
  },
});

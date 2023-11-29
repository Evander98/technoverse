import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { LogoIcon, SearchIcon } from "../assets/icons";
import { colors } from "../constants/colors";

export const Input = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <LogoIcon />
      <TextInput
        onChangeText={setSearch}
        value={search}
        style={styles.input}
        placeholder="Cari produk, masakan dll"
        placeholderTextColor={colors.gray}
      />
      <SearchIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 40,
    borderWidth: 1,
    borderColor: colors.solitude,
    borderRadius: "6px",
    flexDirection: "row",
    width: "70%",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  input: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 10,
    fontFamily: "Grafical",
  },
});

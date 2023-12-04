import { StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import { Alert, Cart, History } from "../assets/icons";
import { Container } from "./Styled";
import { colors } from "../constants/colors";
import { NotificationBadge } from "./NotificationBadge";

export const Header = () => {
  return (
    <Container style={styles.container}>
      <Input />
      <TouchableOpacity>
        <History />
      </TouchableOpacity>
      <TouchableOpacity>
        <Alert />
        <NotificationBadge>26</NotificationBadge>
      </TouchableOpacity>
      <TouchableOpacity>
        <Cart />
        <NotificationBadge>3</NotificationBadge>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 50,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
});

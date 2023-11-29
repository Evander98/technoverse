import { StyleSheet, View } from "react-native";
import { Input } from "../components/Input";
import { Alert, Cart, History } from "../assets/icons";
import { Container, Text } from "./Styled";
import { colors } from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const NotificationBadge = ({ children, content }) => {
  return (
    <View>
      {children}
      <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>{content}</Text>
      </View>
    </View>
  );
};

export const Header = () => {
  return (
    <Container style={styles.container}>
      <Input />
      <TouchableOpacity>
        <History />
      </TouchableOpacity>
      <TouchableOpacity>
        <NotificationBadge content={26}>
          <Alert />
        </NotificationBadge>
      </TouchableOpacity>
      <TouchableOpacity>
        <NotificationBadge content={3}>
          <Cart />
        </NotificationBadge>
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
  badgeWrapper: {
    position: "absolute",
    right: -8,
    top: -9,
    backgroundColor: colors.red,
    width: 18,
    height: 18,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: "600",
  },
});

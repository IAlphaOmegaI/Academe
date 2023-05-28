import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    marginTop: 0,
    boxSizing: "border-box",
    justifyContent: "space-between",
    textAlign: "center",
    marginHorizontal: "2.5%",
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    // textAlign: "center",
  },
  welcomeMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray2,
    marginTop: 2,
    // textAlign: "center",
  },
});

export default styles;

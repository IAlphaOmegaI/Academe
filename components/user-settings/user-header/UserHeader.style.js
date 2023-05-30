import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.medium,
    marginTop: 0,
    // boxSizing: "border-box",
    justifyContent: "space-between",
    textAlign: "center",
    marginHorizontal: SIZES.small,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  welcomeMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray2,
    marginTop: 2,
  },
});

export default styles;

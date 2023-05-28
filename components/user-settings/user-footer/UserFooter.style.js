import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    marginTop: 0,
    boxSizing: "border-box",
    // justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: "2.5%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.gray,
    // textAlign: "center",
    textAlign: "center",
  },
});

export default styles;

import { Dimensions, StyleSheet } from "react-native";

import { COLORS, SIZING, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    height: Dimensions.get("window").height - 50,
    width: "80%",
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    padding: 15,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  listItemText: {
    fontSize: 24,
    fontFamily: FONT.bold,
  },
  listItemIcon: {
    width: 30,
    height: 30,
  },
  slogan: {
    fontSize: 16,
    fontFamily: FONT.regular,
    margin: 10,
  },
  copyright: {
    fontFamily: FONT.regular,
    fontSize: 10,
    margin: 10,
  },
  list: {
    height: "70%",
    gap: 20,
  },
});

export default styles;

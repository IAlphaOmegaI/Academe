import { Dimensions, StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../../constants";

const styles = StyleSheet.create({
  slider: {
    height: Dimensions.get("window").width * 0.5,
    display: "flex",
  },
  container: {
    width: Dimensions.get("window").width * 0.47,
    aspectRatio: 1 / 1,
    display: "flex",
  },
  image: {
    // marginRight: "0%",
    width: "90%",
    aspectRatio: 1 / 1,
    borderRadius: 8,
  },
  name: {
    fontFamily: FONT.regular,
    marginLeft: ".5%",
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
});

export default styles;

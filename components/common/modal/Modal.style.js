import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  backdrop: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#0000009c",
    position: "absolute",
    top: 0,
    left: 0,
  },
  container: {
    backgroundColor: COLORS.lightWhite,
    width: 320,
    height: 180,
    transform: [{ translateX: -160 }, { translateY: -90 }],
    top: "50%",
    borderRadius: 8,
    position: "absolute",
    left: "50%",
    overflow: "hidden",
  },
  titleContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: COLORS.gray2,
    padding: SIZES.medium,
    // borderRadius: 8,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
  },
  content: {
    margin: SIZES.medium,
    color: COLORS.gray,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  button: {
    position: "absolute",
    right: 25,
    bottom: 15,
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
});
export default styles;

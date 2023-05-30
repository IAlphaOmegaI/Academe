import { COLORS, SIZES, FONT } from "../../../constants";
import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  slideContainer: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    height: "100%",
    width: Dimensions.get("window").width * 4,
  },
});
export default styles;

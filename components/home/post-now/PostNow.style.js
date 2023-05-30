import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1000,
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: COLORS.tertiary,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    maxWidth: 45,
    maxHeight: 45,
    tintColor: COLORS.lightGray,
  },
});
export default styles;

import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
    width: "100%",
  },
  imageContainer: {
    marginHorizontal: "10%",
    width: "80%",
    aspectRatio: 1 / 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  label: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderRadius: 2,
    width: "80%",
    marginVertical: "1.5%",
  },
  info: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  textContainer: {},
  button: {
    backgroundColor: COLORS.tertiary,
    width: "60%",
    marginRight: "5%",
    height: "100%",
    marginVertical: SIZES.small,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.small,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    marginVertical: SIZES.medium,
  },
  smallButton: {
    marginVertical: SIZES.small,
    width: "30%",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.small,
    height: "100%",
  },
  icon: {
    height: "50%",
    aspectRatio: 1 / 1,
    tintColor: "white",
  },
});
export default styles;

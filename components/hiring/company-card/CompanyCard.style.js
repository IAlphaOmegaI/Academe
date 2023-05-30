import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },
  cardContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: COLORS.lightGray,
    padding: "3%",
    position: "relative",
    marginTop: 10,
    // height: "auto",
    // height: 2000,
    // height: "100%",
  },
  imageContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 8,
  },
  nameContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginBottom: 10,
    borderBottomColor: COLORS.tertiary,
    borderBottomWidth: 2,
    borderRadius: 2,
  },
  smallText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  descContainer: {
    width: "100%",
  },
  location: {
    color: COLORS.secondary,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  //   like: {
  //     height: 40,
  //     aspectRatio: 1 / 1,
  //     position: "absolute",
  //     transform: [{ translateX: -20 }, { translateY: -20 }],
  //     backgroundColor: COLORS.secondary,
  //     borderRadius: 20,
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     top: 20,
  //     left: 20,
  //     zIndex: 2,
  //   },
  //   icon: {
  //     width: 28,
  //     height: 28,
  //   },
});
export default styles;

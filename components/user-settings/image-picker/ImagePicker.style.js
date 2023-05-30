import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  firstImage: {
    width: "70%",
    height: 252,
    borderRadius: 8,
  },
  labelFirst: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    borderBottomColor: COLORS.tertiary,
    borderBottomWidth: 2,
    borderStyle: "solid",
    marginBottom: 10,
    width: "80%",
  },
  imageContainer: {
    width: "100%",
    flexDirection: "row",
    borderColor: COLORS.gray,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: "2.5%",
    paddingVertical: SIZES.small,
    gap: 5,
  },
  subImagesContainer: {
    width: "25%",
    flexGrow: 1,
    height: 262,
    height: 252,
    paddingHorizontal: "2%",
    justifyContent: "space-between",
  },
  image: {
    width: "98%",
    aspectRatio: 1 / 1,
    borderRadius: 8,
  },
  underTitle: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginBottom: 5,
  },
});

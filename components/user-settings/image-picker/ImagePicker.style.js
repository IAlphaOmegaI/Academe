import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  firstImage: {
    width: "70%",
    // aspectRatio: 1 / 1,
    height: 252,
    borderRadius: 8,
    marginVertical: SIZES.small,
    marginHorizontal: "2.5%",
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
  },
  subImagesContainer: {
    width: "25%",
    flexGrow: 1,
    gap: 5,
    paddingVertical: SIZES.small,
    height: 262,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 8,
    marginBottom: 5,
    height: 80, // Set a height for images inside FlatList
  },
});

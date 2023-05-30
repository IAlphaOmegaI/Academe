import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstImage: {
    height: 252,
    borderRadius: 8,
    width: "100%",
    height: "80%",
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
    borderColor: COLORS.gray,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: "2.5%",
    paddingVertical: SIZES.small,
    gap: 5,
    aspectRatio: 4 / 3,
  },
  subImagesContainer: {
    width: "100%",
    maxHeight: "20%",
  },
  image: {
    marginRight: 5,
    height: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 8,
  },
  underTitle: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginBottom: 5,
  },
});
export default styles;

import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },
  inputContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    width: "100%",
    //   height: 50,
  },
  label: {
    width: "80%",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    borderStyle: "solid",
    borderColor: COLORS.tertiary,
    borderBottomWidth: 2,
  },
  input: {
    backgroundColor: COLORS.lightWhite,
    //   height: 20,
    borderRadius: 8,
  },
  description: {
    height: 100,
  },
  tab: (activeLink, item) => ({
    borderRadius: SIZES.medium,
    backgroundColor: activeLink == item ? COLORS.tertiary : COLORS.secondary,
    height: 30,
    aspectRatio: 1 / 1,
  }),
  tabImage: (activeLink, item) => ({
    borderRadius: SIZES.medium,
    tintColor: activeLink == item ? COLORS.lightWhite : COLORS.ligh,
    width: "50%",
    aspectRatio: 1 / 1,
  }),
  FlatList: {},
});

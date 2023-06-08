import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONT } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.medium,
    marginHorizontal: "2.5%",
  },
  inputContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    width: "100%",
    marginVertical: 10,
    padding: 10,
  },
  label: {
    width: "80%",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    borderStyle: "solid",
    borderColor: COLORS.tertiary,
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  input: {
    backgroundColor: COLORS.lightWhite,
    //   height: 20,
    width: "100%",
    borderRadius: 8,
  },
  description: {
    height: 100,
  },
  tab: (activeLink, item) => ({
    borderRadius: SIZES.medium,
    backgroundColor: activeLink == item ? COLORS.tertiary : COLORS.secondary,
    height: 40,
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
  }),
  tabImage: (activeLink, item) => ({
    borderRadius: SIZES.medium,
    tintColor: activeLink == item ? COLORS.lightWhite : COLORS.lightGray,
    width: "80%",
    height: "80%",
    aspectRatio: 1 / 1,
  }),
});
export default styles;

import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    marginTop: 0,
    boxSizing: "border-box",
    justifyContent: "space-between",
    textAlign: "center",
    marginHorizontal: "2.5%",
  },
  icons: {
    height: 32,
    width: 32,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    margin: 2,
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    // textAlign: "center",
  },
  welcomeMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.gray2,
    marginTop: 2,
    // textAlign: "center",
  },
  formContainer: {
    marginHorizontal: "2.5%",
    padding: SIZES.medium,
  },
  label: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
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

  inputContainer: {
    backgroundColor: COLORS.lightGray,
    marginVertical: 10,
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderRadius: 5,
    width: "100%",
  },
  labelLast: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.primary,
    marginTop: 30,
  },
  inputContainerFirst: {
    marginVertical: 10,
    padding: 2,
  },
  customItemContainerStyle: {
    backgroundColor: COLORS.lightGray,
  },
  customItemLabelStyle: {
    margin: 10,
    fontSize: SIZES.xSmall,
  },
});

export default styles;

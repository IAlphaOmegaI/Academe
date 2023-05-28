import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from "../../../constants";

import ScreenHeaderBtn from "../header/ScreenHeaderBtn";
const ScreenStack = (props) => {
  return (
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension="60%"
            handlePress={props.handlerLeft}
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn
            iconUrl={props.leftIcon}
            dimension={props.leftDimensions}
            handlePress={props.handlerRight}
          />
        ),
        headerTitle: "",
      }}
    />
  );
};
export default ScreenStack;

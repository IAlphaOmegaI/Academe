import { useState } from "react";
import { SafeAreaView, ScrollView, View, Animated } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  LeftMenu,
  ScreenStack,
} from "../components";
// import LeftMenu from "../components/common/leftMenu/LeftMenu";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenStack
        handlerLeft={toggleMenu}
        handlerRight={() => {
          router.push("UserSettings");
        }}
        leftIcon={images.profile}
        leftDimensions="100%"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          {/* <Popularjobs /> */}
          {/* <Nearbyjobs /> */}
        </View>
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
    </SafeAreaView>
  );
};

export default Home;

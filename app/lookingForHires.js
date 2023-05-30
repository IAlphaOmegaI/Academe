import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

import { COLORS, icons, images } from "../constants";
import {
  ScreenHeaderBtn,
  LeftMenu,
  AcademicInstitution,
  User,
  Institution,
  UserHeader,
  MainSelector,
  ScreenStack,
  UserContainer,
} from "../components";

const lookingForHires = (props) => {
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ScreenStack
          handlerLeft={toggleMenu}
          handlerRight={() => {
            router.push("UserSettings");
          }}
          leftIcon={images.profile}
          leftDimensions="100%"
        />
        <UserHeader
          welcomeMessage={
            "Get to know thousands of hard-working people, ready to work with you on your next project! "
          }
          title={"Find your next employee!"}
        />
        <View>
          <UserContainer request="user" />
        </View>
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
    </SafeAreaView>
  );
};
export default lookingForHires;

import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  LeftMenu,
  UserHeader,
  ScreenStack,
  UserContainer,
} from "../components";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images, FONT } from "../constants";

const lookingForHires = (props) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeSchoolType, setActiveSchoolType] = useState("High-School");

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
            "Learn about the best schools and their success stories. Become one of their students. Apply now!"
          }
          title={"Look out for where to continue your studies!"}
        />
        <View>
          <View style={styles.welcome}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.welcomeSearch}
                placeholder="What are you looking to learn today?"
              />
              <TouchableOpacity style={styles.searchBtn}>
                <Image
                  source={icons.search}
                  style={styles.searchIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <FlatList
              data={[
                "High-School",
                "Vocational High-School",
                "Technical High-School",
                "University",
                "Academia",
                "College",
                "Masters",
                "PhD",
              ]}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.tab(activeSchoolType, item)}
                  onPress={() => {
                    setActiveSchoolType(item);
                  }}
                >
                  <Text style={styles.tabText(activeSchoolType, item)}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => {
                index.toString();
              }}
              contentContainerStyle={{ columnGap: SIZES.small }}
              style={styles.FlatList}
            />
          </View>
          <UserContainer request="academicinstitution" />
        </View>
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
    </SafeAreaView>
  );
};
export default lookingForHires;

const styles = StyleSheet.create({
  welcome: {},
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    padding: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeSearch: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.medium,
    width: "80%",
    height: 50,
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    height: 50,
    aspectRatio: 1 / 1,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  FlatList: {
    marginHorizontal: SIZES.medium,
  },
});

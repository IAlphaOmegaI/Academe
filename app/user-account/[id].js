import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Stack, useRouter, useSearchParams } from "expo-router";

import {
  LeftMenu,
  Slider,
  ScreenStack,
  Module,
  UserHeader,
} from "../../components";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { COLORS, FONT, SIZES, defaults, images } from "../../constants";

const styles = StyleSheet.create({
  slider: {
    height: (50 / 100) * Dimensions.get("window").height,
    borderRadius: 8,
    overflow: "hidden",
  },
  content: {
    padding: SIZES.xSmall,
  },
  nameContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    padding: SIZES.small,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
    alignItems: "center",
  },
  profilePicture: {
    width: "15%",
    aspectRatio: 1 / 1,
    borderRadius: 10,
  },
  name: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.tertiary,
  },
  email: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SIZES.xSmall,
    marginTop: SIZES.small,
    gap: 5,
  },
  underTitle: {
    fontFamily: FONT.regular,
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    width: "85%",
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 2,
    borderRadius: 2,
  },
  descriptionTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
  },
  description: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
});

const DisplayUserInformation = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "user", params.id);
        const userData = await getDoc(docRef);
        setUserData(userData.data());
      } catch (error) {
        console.error("Error retrieving User Data: ", error);
      }
    };
    fetchUserData();
  }, []);

  // if (!userData) {
  //   return <Text>Loading...</Text>; // Show a loading indicator while fetching data
  // }

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return !(userData == null) ? (
    <View>
      <ScreenStack
        handlerLeft={toggleMenu}
        handlerRight={() => {
          router.push("UserSettings");
        }}
        leftIcon={defaults.userDefault}
        leftDimension={"100%"}
      />
      <ScrollView style={styles.container}>
        <View style={styles.slider}>
          <Slider imagesArray={userData.imagesArray} />
        </View>
        <View style={styles.content}>
          <View style={styles.nameContainer}>
            <Image
              source={{ uri: userData.imagesArray[0] }}
              style={styles.profilePicture}
            />
            <View style={styles.textSubContainer}>
              <Text style={styles.name}>{userData.name}</Text>
              <Text style={styles.email}>Email: {userData.email}</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.descriptionTitle}>Phone Number: </Text>
            <Text style={styles.underTitle}> {userData.phoneNumber}</Text>
            <Text style={styles.descriptionTitle}>Age: </Text>
            <Text style={styles.underTitle}>{userData.age}</Text>
            <Text style={styles.descriptionTitle}>Education: </Text>
            <Text style={styles.underTitle}>{userData.education}</Text>
            <Text style={styles.descriptionTitle}>Description: </Text>
            <Text style={styles.description}>{userData.description}</Text>
          </View>
        </View>
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
    </View>
  ) : (
    <View style={styles.horizontal}>
      <ActivityIndicator size={"large"} color={COLORS.primary} />
    </View>
  );
};

export default DisplayUserInformation;

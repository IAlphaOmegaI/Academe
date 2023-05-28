import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../firebase";

import { COLORS, icons } from "../constants";
import {
  ScreenHeaderBtn,
  LeftMenu,
  AcademicInstitution,
  User,
  Institution,
  UserHeader,
  MainSelector,
  ScreenStack,
  ImagePickerComponent,
  UserFooter,
} from "../components";
const AccountSetting = () => {
  const [infoInput, setInfoInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onUserDataInputed = (userDataInput) => {
    // console.log(userDataInput);
    setInfoInput((prevState) => {
      return {
        // ...prevState,
        ...userDataInput,
        type: dropDownChoice,
      };
    });
  };

  const pushUser = async (user) => {
    const userKeys = Object.keys(user);
    let completion = true;
    userKeys.forEach((key, i) => {
      console.log(user[key]);
      user[key] == "" || user[key] == null || user[key] == ""
        ? (completion = false)
        : null;
    });
    if (completion) {
      try {
        const collectionRef = collection(db, user.type.toLowerCase());
        const docRef = await addDoc(collectionRef, user);
        console.log("Document written with ID: ", docRef.id);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert(
          `There was some error, please report this error code to our team [ERROR:${error}]`
        );
      }
    } else {
      Alert.alert("Complete all the neccessary fields");
    }
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [dropDownChoice, setDropDownChoice] = useState(null);
  const onChangeDropDownHandler = (e) => {
    setDropDownChoice(e);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScreenStack
        handlerLeft={toggleMenu}
        handlerRight={() => {
          pushUser(infoInput);
        }}
        leftIcon={dropDownChoice ? icons.finish : null}
        leftDimensions="90%"
      />

      <ScrollView>
        <UserHeader
          welcomeMessage={
            " Be Part of the Network of thousands of aspiring individuals in search oftheir next oppperturnity!"
          }
          title={"Create Your Account Today!"}
        />
        {!loggedIn ? (
          <View>
            <MainSelector
              onChangeValue={(value) => {
                onChangeDropDownHandler(value);
                onUserDataInputed(value);
              }}
            >
              <View>
                {dropDownChoice == "User" ? (
                  <User onInput={onUserDataInputed} />
                ) : dropDownChoice == "Institution" ? (
                  <Institution />
                ) : dropDownChoice == "Academic Institution" ? (
                  <AcademicInstitution />
                ) : dropDownChoice == "Company" ? (
                  <View>
                    <Text>Company</Text>
                  </View>
                ) : null}
              </View>
            </MainSelector>
            <UserFooter title={"Log In instead"} />
          </View>
        ) : null}
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
    </SafeAreaView>
  );
};

export default AccountSetting;

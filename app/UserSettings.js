import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";

import { COLORS, defaultCompany, defaults, icons } from "../constants";
import {
  LeftMenu,
  AcademicInstitution,
  User,
  Institution,
  UserHeader,
  MainSelector,
  ScreenStack,
  UserFooter,
  CompanyAccount,
  Modal,
} from "../components";
import { useRouter } from "expo-router";

const AccountSetting = () => {
  const router = useRouter();
  const [infoInput, setInfoInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onUserDataInputed = (userDataInput) => {
    setInfoInput((prevState) => {
      return {
        // ...prevState,
        ...userDataInput,
        type: dropDownChoice,
      };
    });
  };
  const [errorConnection, setErrorConnection] = useState([]);
  const [errorCompletion, setErrorCompletion] = useState([]);

  const pushUser = async (user) => {
    const userKeys = Object.keys(user);
    let completion = true;
    user["imagesArray"][0] ?? defaults[user.type + "Default"];

    // userKeys.forEach((key, i) => {
    //   console.log(key);
    //   user[key] == "" ? (completion = false) : null;
    //   console.log(user[key] == "");
    // });
    if (completion) {
      try {
        //creating the user-account
        const { email, password } = user;

        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const firebaseUser = userCredential.user;
        console.log("User account created:", firebaseUser.uid);

        //pushing the user profile with all other releveant information in the FireStore with a shared ID between Authentication and FireStore
        const docRef = doc(
          db,
          user.type.toLowerCase().replace(" ", ""),
          firebaseUser.uid
        );
        const document = setDoc(docRef, user);
        console.log("Document written with ID: ", docRef.id);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error adding document: ", error);
        setErrorConnection([
          true,
          `Error in Connection or in User Account Creation: ${error}`,
        ]);
      }
    } else {
      setErrorCompletion([
        true,
        `Complete all the neccessary fields before proceeding!`,
      ]);
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
        {!loggedIn ? (
          <View>
            <UserHeader
              welcomeMessage={
                " Be Part of the Network of thousands of aspiring individuals in search oftheir next oppperturnity!"
              }
              title={"Create Your Account Today!"}
            />
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
                    <Institution onInput={onUserDataInputed} />
                  ) : dropDownChoice == "Academic Institution" ? (
                    <AcademicInstitution onInput={onUserDataInputed} />
                  ) : dropDownChoice == "Company" ? (
                    <View>
                      <CompanyAccount onInput={onUserDataInputed} />
                    </View>
                  ) : null}
                </View>
              </MainSelector>
              <UserFooter
                title={"Log In instead"}
                onClick={() => {
                  router.push("logIn");
                }}
              />
            </View>
          </View>
        ) : null}
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
      {errorCompletion[0] ? (
        <Modal
          content={errorCompletion[1]}
          title={"Careful!"}
          onOkay={() => {
            setErrorCompletion([false, ""]);
          }}
        />
      ) : null}
      {errorConnection[0] ? (
        <Modal
          content={errorConnection[1]}
          title={"ERROR"}
          onOkay={() => {
            setErrorConnection([false, ""]);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default AccountSetting;

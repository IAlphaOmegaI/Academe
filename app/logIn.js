import { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { db } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { COLORS, SIZES, icons, FONT } from "../constants";
import {
  UserHeader,
  MainSelector,
  ScreenStack,
  UserFooter,
  Modal,
  UserDisplay,
} from "../components";

const LogInScreen = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUserData, setloggedInUserData] = useState();
  const [loading, setLoading] = useState(false);

  const [loginError, setLoginError] = useState(false);
  const [dropDownChoice, setDropDownChoice] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (email, password) => {
    try {
      const auth = getAuth();
      const userCredintials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setloggedInUserData(userCredintials.user);
      setLoggedIn(true);
    } catch (error) {
      setLoginError(true);
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const docRef = doc(
          db,
          dropDownChoice.toLowerCase(),
          loggedInUserData.uid
        );
        //..
        // console.log(db.lis);
        //..
        const userData = await getDoc(docRef);
        setloggedInUserData(userData.data());
        setLoading(false);
      } catch (error) {
        console.error("Error retrieving User Data: ", error);
      }
    };
    loggedIn ? fetchUserData() : null;
  }, [loggedIn]);

  const onChangeDropDownHandler = (value) => {
    setDropDownChoice(value);
    // console.log(value);
  };
  return (
    <View>
      <ScreenStack />

      {!loggedIn ? (
        <>
          <UserHeader
            title="Log In to Academe"
            welcomeMessage="Get to enjoy the full Experience of Academe through Logging In!"
          />
          <MainSelector
            onChangeValue={(value) => {
              onChangeDropDownHandler(value);
            }}
          ></MainSelector>
          <View style={styles.container}>
            <View>
              <Text style={styles.label}>Your Email Address:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(email) => {
                  setEmail(email);
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Your Password:</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(password) => {
                  setPassword(password);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.logInButton}
              onPress={() => {
                handleLogin(email, password);
              }}
            >
              <Text style={styles.label}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <UserFooter
            title="Create an account instead"
            onClick={() => {
              router.push("UserSettings");
            }}
          />
        </>
      ) : (
        <View>
          {!loading ? (
            dropDownChoice == "User" ? (
              <UserDisplay user={loggedInUserData} />
            ) : // <Text>{loggedInUserData.description}</Text>
            // : dropDownChoice == 'Company' ?
            // : dropDownChoice == 'Academic Institution' ?
            // : dropDownChoice == 'Institution'
            null
          ) : (
            <View style={styles.center}>
              <ActivityIndicator color={COLORS.primary} size={"large"} />
            </View>
          )}
        </View>
      )}
      {loginError ? (
        <Modal
          title={"Account Not found"}
          content="Double check your credientials!"
          onOkay={() => {
            setLoginError(false);
          }}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
  },
  label: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
  },
  input: {
    marginVertical: 10,
    height: 50,
    width: "100%",
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
  },
  logInButton: {
    marginVertical: 10,
    backgroundColor: COLORS.tertiary,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
  },
});
export default LogInScreen;

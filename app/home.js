import { useState, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Animated,
  Touchable,
} from "react-native";
import { Stack, useRouter, useEffect } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  LeftMenu,
  PostNow,
  ScreenStack,
} from "../components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Home = () => {
  // const { user } = useContext(UserContext);

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [loggedInUserData, setloggedInUserData] = useState();

  // useEffect(() => {
  // const fetchUserData = async () => {
  //   try {
  //     // const docRef = doc(db, "user");
  //     //..
  //     // console.log(db.lis);
  //     //..
  //     // const userData = await getDoc(docRef);
  //     // setloggedInUserData(userData.data());
  //   } catch (error) {
  //     console.error("Error retrieving User Data: ", error);
  //   }
  // };
  // fetchUserData();
  // }, []);

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

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
      <LeftMenu isOpen={isMenuOpen} />
      <PostNow />
    </SafeAreaView>
  );
};

export default Home;

import { View, TouchableOpacity, Image } from "react-native";

import { useRouter } from "expo-router";

import styles from "./PostNow.style";

import { icons } from "../../../constants";

const PostNow = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/new-post/NewPost");
        }}
      >
        <Image source={icons.plus} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
export default PostNow;

import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { useRouter } from "expo-router";

import styles from "./UserSlider.style";
const UserSlider = ({ data }) => {
  const router = useRouter();
  return (
    <FlatList
      data={data}
      horizontal
      style={styles.slider}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            router.push(`/user-account/${item.id}`);
          }}
          style={styles.container}
        >
          <Image source={{ uri: item.imagesArray[0] }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
};
export default UserSlider;

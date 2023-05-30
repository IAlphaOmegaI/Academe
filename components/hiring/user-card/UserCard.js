import { Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import { useRouter } from "expo-router";

import { icons } from "../../../constants";

import styles from "./UserCard.style";

const UserCard = ({ user }) => {
  const router = useRouter();
  const [likedUsers, setLikedUsers] = useState([]);
  const isLiked = likedUsers.includes(user.id);
  const handleLike = (userId) => {
    setLikedUsers((prevLikedUsers) => {
      if (prevLikedUsers.includes(userId)) {
        return prevLikedUsers.filter((id) => id !== userId);
      } else {
        return [...prevLikedUsers, userId];
      }
    });
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.like} onPress={() => handleLike(user.id)}>
        <Image
          source={isLiked ? icons.heart : icons.heartOutline}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push(`/user-account/${user.id}`);
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: user.imagesArray[0],
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.smallText}>{user.education}</Text>
          <Text style={styles.smallText}>{user.age}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.description}>
            {user.description.length > 200
              ? user.description.slice(0, 200) + "..."
              : user.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

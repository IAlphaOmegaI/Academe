import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import styles from "./UserContainer.style";
import { images, icons } from "../../../constants";

const UserContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);

  const getUsers = async () => {
    try {
      const userCollection = collection(db, "user");
      const snapshot = await getDocs(userCollection);
      const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsersData(users);
    } catch (error) {
      console.error("Error retrieving collection: ", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
    <View style={styles.container}>
      {usersData.map((user, index) => {
        const isLiked = likedUsers.includes(user.id);

        return (
          <View style={styles.cardContainer} key={user.id}>
            <TouchableOpacity
              style={styles.like}
              onPress={() => handleLike(user.id)}
            >
              <Image
                source={isLiked ? icons.heart : icons.heartOutline}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
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
      })}
    </View>
  );
};

export default UserContainer;

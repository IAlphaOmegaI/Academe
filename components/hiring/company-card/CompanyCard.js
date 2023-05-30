import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./CompanyCard.style";
// import { useState } from "react";

import {
  defaultCompany,
  defaultProfilePicture,
  icons,
} from "../../../constants";

const CompanyCard = ({ company }) => {
  //   const [likedUsers, setLikedUsers] = useState([]);
  //   const isLiked = likedUsers.includes(user.id);
  //   const handleLike = (userId) => {
  //     setLikedUsers((prevLikedUsers) => {
  //       if (prevLikedUsers.includes(userId)) {
  //         return prevLikedUsers.filter((id) => id !== userId);
  //       } else {
  //         return [...prevLikedUsers, userId];
  //       }
  //     });
  //   };
  return (
    <View style={styles.cardContainer}>
      {/* <TouchableOpacity style={styles.like} onPress={() => handleLike(user.id)}>
        <Image
          source={isLiked ? icons.heart : icons.heartOutline}
          style={styles.icon}
        />
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          useRouter.push(`/company-account/${company.id}`);
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: company.imagesArray[0],
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.userName}>{company.name}</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.smallText}>{company.overhead}</Text>
          <Text style={styles.smallText}>{company.phoneNumber}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.location}>
            {company.location.length > 200
              ? company.location.slice(0, 200) + "..."
              : company.location}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CompanyCard;

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import styles from "./UserDisplay.style";
import { useState, useEffect } from "react";

import UserHeader from "../../user-settings/user-header/UserHeader";

import { COLORS, icons } from "../../../constants";

const UserDisplay = (props) => {
  const [imageError, setImageError] = useState(true);
  useEffect(() => {
    if (props.user.imagesArray === undefined) {
      setImageError(true);
    } else {
      setImageError(false);
    }
  }, [props.user.imagesArray]);
  const user = props.user;
  return (
    <ScrollView>
      <UserHeader
        title={`Welcome ${user.name}`}
        welcomeMessage="Have a look at your profile!"
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {!imageError ? (
            <Image style={styles.image} source={{ uri: user.imagesArray[0] }} />
          ) : (
            <ActivityIndicator color={COLORS.tertiary} size={"large"} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.info}>{user.name}</Text>
          <Text style={styles.label}>Education</Text>
          <Text style={styles.info}>{user.education}</Text>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.info}>{user.phoneNumber}</Text>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.info}>{user.age}</Text>
          <Text style={styles.label}>Account Type</Text>
          <Text style={styles.info}>{user.type}</Text>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.info}>{user.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.info}>Change Infomation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Image style={styles.icon} source={icons.logOut} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default UserDisplay;

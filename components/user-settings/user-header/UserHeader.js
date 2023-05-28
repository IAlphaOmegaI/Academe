import { Text, View } from "react-native";
import styles from "./UserHeader.style";

const UserHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{props.title}</Text>
      <Text style={styles.welcomeMessage}>{props.welcomeMessage}</Text>
    </View>
  );
};
export default UserHeader;

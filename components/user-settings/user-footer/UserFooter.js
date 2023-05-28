import { Text, TouchableOpacity, View } from "react-native";
import styles from "./UserFooter.style";
// import { TouchableOpacity } from "react-native-gesture-handler";

const UserHeader = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.userName}>{props.title}</Text>
        {/* <Text style={styles.welcomeMessage}>{props.welcomeMessage}</Text> */}
      </View>
    </TouchableOpacity>
  );
};
export default UserHeader;

import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./Modal.style";

const Modal = (props) => {
  return (
    <View style={styles.backdrop} onPress={props.onOkay}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {props.title.length > 30
              ? props.title.slice(0, 25) + "..."
              : props.title}
          </Text>
        </View>
        <Text style={styles.content}>
          {props.content.length > 130
            ? props.content.slice(0, 130) + "..."
            : props.content}
        </Text>
        <TouchableOpacity style={styles.button} onPress={props.onOkay}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Modal;

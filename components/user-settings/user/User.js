import { Text, Image, View, TextInput } from "react-native";
import { useState } from "react";

import ImagePickerComponent from "../image-picker/ImagePicker";

import DropDownPicker from "react-native-dropdown-picker";
import styles from "./User.style";

const User = (props) => {
  const [openMain, setOpenMain] = useState(false);
  const [valueMain, setValueMain] = useState(null);
  const [itemsMain, setItemsMain] = useState([
    {
      key: "General High-School",
      label: "General High-School",
      value: "General High-School",
    },
    {
      key: "Vocational High-School",
      label: "Vocational High-School",
      value: "Vocational High-School",
    },
    {
      key: "University",
      label: "University",
      value: "University",
    },
    {
      key: "Part of the job market",
      label: "Part of the job market",
      value: "Part of the job market",
    },
  ]);

  const [userData, setUserData] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
    education: "",
    password: "",
    description: "",
  });
  const onInputHandler = (target, value) => {
    setUserData((prevSnap) => {
      return {
        ...prevSnap,
        [target]: value,
      };
    });
    props.onInput(userData);
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Name:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("name", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Age:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("age", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Email:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("email", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Phone Number:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("phoneNumber", value);
          }}
        />
      </View>
      <View style={styles.inputContainerFirst}>
        <Text style={styles.labelFirst}>Your Education:</Text>
        <DropDownPicker
          listMode="MODAL"
          open={openMain}
          value={valueMain}
          items={itemsMain}
          setOpen={setOpenMain}
          setValue={setValueMain}
          setItems={setItemsMain}
          modalAnimationType="slide"
          customItemContainerStyle={styles.customItemContainerStyle}
          onChangeValue={(value) => {
            onInputHandler("education", value);
          }}
        />
      </View>
      <ImagePickerComponent onImageSelected={onInputHandler} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Choose a strong Password:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("password", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Give a Description of You:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("description", value);
          }}
        />
      </View>
    </View>
  );
};
export default User;

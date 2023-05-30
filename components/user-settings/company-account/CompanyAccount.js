import { Text, Image, View, TextInput } from "react-native";
import { useState } from "react";

import styles from "./CompanyAccount.style";

import HorizontalImagePickerComponent from "../horizontali-image-picker/HorizontalImagePicker";

const CompanyAccount = (props) => {
  const [companyData, setCompanyData] = useState({
    name: "",
    overhead: "",
    email: "",
    phoneNumber: "",
    location: "",
    imagesArray: [],
    password: "",
  });
  const onInputHandler = (target, value) => {
    setCompanyData((prevSnap) => {
      return {
        ...prevSnap,
        [target]: value,
      };
    });
    props.onInput(companyData);
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Company Name:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("name", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Company Overhead:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("overhead", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Company Email Address:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("email", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Representive Phone Number:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("phoneNumber", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("password", value);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Company Location:</Text>
        <TextInput
          onChangeText={(value) => {
            onInputHandler("location", value);
          }}
        />
      </View>
      <HorizontalImagePickerComponent
        onImageSelected={onInputHandler}
        title="Pick a few pictures of your Company!"
      />
      <Text style={styles.labelLast}>
        Keep in mind that this application will get checked through Academe's
        filters and an email is going to be send to the company's email address,
        the application will continue from there on! This can take up to 14
        days!
      </Text>
    </View>
  );
};

export default CompanyAccount;

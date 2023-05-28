import { Text, Image, View, TextInput } from "react-native";
import { useState } from "react";

import styles from "./Institution.style";

const Institution = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institution Name:</Text>
        <TextInput />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institution Overhead:</Text>
        <TextInput />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institution Email Address:</Text>
        <TextInput />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Representive Phone Number:</Text>
        <TextInput />
      </View>
      <Text style={styles.labelLast}>
        Keep in mind that this application will get checked through Academe's
        filters and an email is going to be send to the institutions email
        address, the application will continue from there on! This can take up
        to 14 days!
      </Text>
    </View>
  );
};

export default Institution;

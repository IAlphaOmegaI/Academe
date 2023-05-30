import { Text, Image, View, TextInput } from "react-native";
import { useState } from "react";

import styles from "./Institution.style";

const Institution = () => {
  return (
    <View>
      <Text style={styles.labelLast}>
        Institution are an important part of Academe's ecosystem, due to that we
        take institution applications only directly, shoot us an email at
        academe@edu.com specifying your institution name, reason to join Academe
        and a representative Phone Number, we'll talk from there on the
        restrictions and conditions of using the application!
      </Text>
    </View>
  );
};

export default Institution;

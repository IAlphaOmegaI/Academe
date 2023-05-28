import { Text, Image, View, TextInput } from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";
import styles from "./AcademicInstitution.style";
import studyFields from "./studyFields";

const AcademicInstitution = () => {
  const [openField, setOpenFields] = useState(false);
  const [valueFields, setValueFields] = useState(null);
  const [itemsFields, setItemsFields] = useState(studyFields);
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institution Name:</Text>
        <TextInput />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Institution Level:</Text>
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
      <View style={styles.inputContainerFirst}>
        <Text style={styles.labelFirst}>All Institutions Study Fields</Text>
        <DropDownPicker
          listMode="MODAL"
          open={openField}
          value={valueFields}
          items={itemsFields}
          setOpen={setOpenFields}
          setValue={setValueFields}
          setItems={setItemsFields}
          modalAnimationType="slide"
          multiple={true}
          min={1}
          max={10}
          searchable={true}
          modalList={true}
          customItemContainerStyle={styles.customItemContainerStyle}
          customItemLabelStyle={styles.customItemLabelStyle}
        />
      </View>
      <Text style={styles.labelLast}>
        Keep in mind that this application will get checked through Academe's
        filters and an email is going to be send to the institutions email
        address, this application will continue from there on! We will require
        confirmation on all the information provided here, please make sure that
        all the information is correct! This can take up to 14 days!
      </Text>
    </View>
  );
};
export default AcademicInstitution;

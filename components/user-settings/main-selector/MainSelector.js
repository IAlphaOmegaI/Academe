import { Text, Image, View, TextInput } from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

import styles from "./MainSelector.style";

import { icons } from "../../../constants";

const MainSelector = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      key: "User",
      label: "User",
      value: "User",
      icon: () => <Image source={icons.user} style={styles.icons} />,
    },
    {
      key: "Institution",
      label: "Institution",
      value: "Institution",
      icon: () => <Image source={icons.institutions} style={styles.icons} />,
    },
    {
      key: "Academic Institution",
      label: "Academic Institution",
      value: "Academic Institution",
      icon: () => <Image source={icons.academics} style={styles.icons} />,
    },
    {
      key: "Company",
      label: "Company",
      value: "Company",
      icon: () => <Image source={icons.company} style={styles.icons} />,
    },
  ]);
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainerFirst}>
        <Text style={styles.labelFirst}>You are?</Text>
        <DropDownPicker
          listMode="MODAL"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          modalAnimationType="slide"
          onChangeValue={(value) => {
            props.onChangeValue(value);
          }}
          customItemContainerStyle={styles.customItemContainerStyle}
        />
      </View>
      {props.children}
    </View>
  );
};

export default MainSelector;

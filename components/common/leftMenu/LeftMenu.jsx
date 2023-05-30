import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";

import { COLORS, icons, images } from "../../../constants";
import styles from "./LeftMenu.style";

const LeftMenu = ({ isOpen }) => {
  const widthPercentage = parseInt(styles.container.width.replace("%", ""));
  const menuWidth = (Dimensions.get("window").width * widthPercentage) / 100;
  const menuAnimation = useRef(new Animated.Value(-menuWidth)).current;
  const animation = Animated.timing(menuAnimation, {
    toValue: isOpen ? 0 : -menuWidth,
    duration: 400,
    useNativeDriver: true,
  });

  useEffect(() => {
    animation.stop();
    animation.start();
  }, [menuAnimation, isOpen]);

  const router = useRouter();

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{ translateX: menuAnimation }],
      }}
      toggleMenu={isOpen}
    >
      <View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("home");
          }}
        >
          <Image source={icons.home} style={styles.listItemIcon} />
          <Text style={styles.listItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Image source={icons.academics} style={styles.listItemIcon} />
          <Text style={styles.listItemText}>Academics</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.listItem}>
          <Image source={icons.work} style={styles.listItemIcon} />
          <Text style={styles.listItemText}>Jobs</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("schools");
          }}
        >
          <Image source={icons.apply} style={styles.listItemIcon} />
          <Text style={styles.listItemText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            router.push("lookingForHires");
          }}
        >
          <Image source={icons.hiring} style={styles.listItemIcon} />
          <Text style={styles.listItemText}>Hiring</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Image source={icons.institutions} style={styles.listItemIcon} />
          <Text style={styles.listItemText}>Institutions</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.slogan}>Discover Your New Opportunity!</Text>
        <Text style={styles.copyright}>All Rights Reserved, Academe 2023</Text>
      </View>
    </Animated.View>
  );
};

export default LeftMenu;

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

import { COLORS, FONT, icons, SIZES } from "../../constants";
import {
  ImagePickerComponent,
  UserHeader,
  ScreenStack,
} from "../../components";

import styles from "./NewPost.style";

const NewPost = () => {
  const [activeLink, setActiveLink] = useState(icons.github);
  return (
    <ScrollView style={styles.container}>
      <ScreenStack />
      <UserHeader
        title="Post something!"
        welcomeMessage="Share your great Ideas with the world!"
      />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What is your Project's Name?</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What will your Project be about?</Text>
        <TextInput style={[styles.input, styles.description]}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What about your Project's agenda:</Text>
        <TextInput style={[styles.input, styles.description]}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Who are you looking for?</Text>
        <TextInput style={[styles.input, styles.description]}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Any extra links participants might want to know about?
        </Text>
        <TextInput style={[styles.input, styles.description]}></TextInput>
      </View>
      <View>
        <FlatList
          data={[
            icons.github,
            icons.linkedin,
            icons.slack,
            icons.reddit,
            icons.quora,
            icons.dzone,
            icons.trello,
          ]}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeLink === item)}
              onPress={() => {
                setActiveLink(item);
              }}
            >
              <Image
                source={item}
                style={styles.tabImage(activeLink === item)}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ columnGap: SIZES.small }}
          style={styles.FlatList}
        />
      </View>
    </ScrollView>
  );
};
export default NewPost;

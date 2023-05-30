import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./HorizontalImagePicker.style";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const HorizontalImagePickerComponent = (props) => {
  const uploadImage = async (filePath) => {
    const data = await fetch(filePath);
    const blob = await data.blob();

    const imageRef = ref(storage, `images/${Date.now()}`);
    await uploadBytes(imageRef, blob);

    const url = await getDownloadURL(imageRef);
    return url;
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const imageUrl = await uploadImage(result.assets[0]["uri"]);
      setImages((prevImages) => [...prevImages, imageUrl]);
    }
  };

  useEffect(() => {
    props.onImageSelected("imagesArray", images);
  }, [images]);

  const pressImagesHandler = (index) => {
    const img = images[index];
    images.splice(index, 1);
    setImages([img, ...images]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.labelFirst}>{props.title}</Text>
        <Text style={styles.underTitle}>
          The first one you choose will be your general Profile Picture!
        </Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {images.length > 0 && (
          <Image
            key={0}
            source={{ uri: images[0] }}
            style={styles.firstImage}
          />
        )}
        <FlatList
          horizontal
          data={images}
          keyExtractor={(item, index) => index.toString()}
          style={styles.subImagesContainer}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                pressImagesHandler(index + 1);
              }}
              key={index}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default HorizontalImagePickerComponent;

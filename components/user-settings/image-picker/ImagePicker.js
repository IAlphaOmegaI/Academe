import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./ImagePicker.style";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export default function ImagePickerComponent(props) {
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
    if (images.length >= 3) {
      Alert.alert("3 Images is the Maximum Value");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      // console.log(result.uri, );
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
        <Text style={styles.labelFirst}>Pick your Best Looking Pictures</Text>
        <Text style={styles.underTitle}>
          The first one you choose will your general Profile Picture
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
        <View
          style={styles.subImagesContainer}
          contentContainerStyle={styles.subImagesContainer}
        >
          {images.map((image, index) => (
            <TouchableOpacity
              onPress={() => {
                pressImagesHandler(index);
              }}
              key={index}
            >
              <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

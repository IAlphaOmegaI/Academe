import { View, Text, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./Slider.style";

const Slider = ({ imagesArray }) => {
  const renderSlides = () => {
    return imagesArray.map((image, index) => {
      return (
        <View key={index} style={styles.slideContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      );
    });
  };

  return (
    <Swiper style={styles.wrapper} loop>
      {renderSlides()}
    </Swiper>
  );
};

export default Slider;

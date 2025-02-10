import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

// * require()
const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // result.assets[0].fileName if ImagePickerSuccessResult
      setSelectedImage(result.assets[0].uri);
      // console.log(result);
    } else {
      alert('You did not select any image.');
    }
  }


  return (
    <View style={styles.appScreen}> 

      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>

      <View style={styles.buttonsContainer}>
        {/* NOTE! Button IS SELF-CREATED in components */}
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo"/>
      </View>


      {/* <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link> */}

    </View>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },

  imageContainer: { //! imgCont is a FLEXBOX!
    flex: 1,
  },
  buttonsContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

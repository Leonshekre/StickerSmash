import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { type ImageSource } from 'expo-image';

import EmojiPicker from "@/components/EmojiPicker";
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

// * require()
const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      // result.assets[0].fileName if ImagePickerSuccessResult
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      // console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  // For CircleButton / IconButton
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {
    
  };


  return (
    <View style={styles.appScreen}> 

      <View style={styles.imageContainer}>
        {/* <Image source={PlaceholderImage} style={styles.image}/> */}
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {/* {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />} */}
        {pickedEmoji ? (<EmojiSticker imageSize={40} stickerSource={pickedEmoji} />) : (null)}
      </View>

      {/* When showAppOptions=true, render diff view */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.buttonsContainer}>
          {/* NOTE! Button IS SELF-CREATED in components */}
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
        </View>
      )}
      
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        {/* stuff n things */}
      </EmojiPicker>

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

  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

// PROPS: Immutable, like "const x" parameters, passed from parent
// STATE: Mutable, local/private only, changes current "state" of app
type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

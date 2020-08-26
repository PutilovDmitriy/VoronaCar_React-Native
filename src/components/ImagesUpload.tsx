import * as React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

interface IImagesUploadProps {}

const ImagesUpload: React.FunctionComponent<IImagesUploadProps> = (props) => {
  const [images, setImages] = React.useState<string[]>([]);
  let a = 0;

  const selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      allowsEditing: true,
    });
    if (!cancelled) setImages(uri);
  };

  const akePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    setImages(uri);
  };
  return (
    <View>
      <Button title="Загрузить" onPress={selectPicture} />
      <Button title="Загрузить" onPress={akePicture} />
    </View>
  );
};

export default ImagesUpload;

const styles = StyleSheet.create({
  containet: {},
  images: {
    height: 100,
    backgroundColor: "red",
  },
  img: {
    width: 50,
    height: 50,
  },
});

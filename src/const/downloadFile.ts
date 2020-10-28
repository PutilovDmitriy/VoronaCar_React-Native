import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

export const downloadFile = (url: string, title: string) => {
  let fileUri = FileSystem.documentDirectory + `${title}.xlsx`;
  FileSystem.downloadAsync(url, fileUri)
    .then(({ uri }) => {
      sharingFile(uri);
    })
    .catch(error => {
      console.error(error);
    })
};

const sharingFile = (fileUri: string) => {
  Sharing.shareAsync(fileUri)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

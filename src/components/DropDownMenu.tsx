import * as React from "react";
import {Modal, StyleSheet, View, Text, Image, Pressable, AsyncStorage} from "react-native";
import {Car} from "../types/Car";
import {useState} from "react";
import {colorGrey, urlCar} from "../const";
import { downloadFile}  from "../const/downloadFile";
import TextModal from "./TextModal";

interface IDropDownMenuProps {
  handlerNavigate: (name: string, params?: { car: Car }) => void;
  car: Car;
  needShowInfo: boolean;
  addProblem?: (number: string, problems: string[]) => void;
}

const DropDownMenu: React.FunctionComponent<IDropDownMenuProps> = ({
  handlerNavigate,
  car,
  needShowInfo,
  addProblem
}) => {
  const [isShow, setIsShow] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [textProblem, setTextProblem] = useState('');

  const handlerPressCarInfo = () => {
    handlerNavigate('CarInfo', { car });
    setIsShow(false);
  };

  const handlerPressAddProblem = () => {
    setShowModal(true);
    setIsShow(false);
  };

  const handlerDownload = () => {
    setIsShow(false);
    downloadFile(`${urlCar}/events/${car.number}`, `События автомобиля ${car.number}`);
  };

  const handlerAddProblem = () => {
    setShowModal(false);
    addProblem && addProblem(car.number,[...car.problems, textProblem]);
    setTextProblem('');
  };

  return (
    <View>
      <Pressable
        onPress={() =>
          setIsShow(true)}
        style={styles.openMenuIcon}
      >
        <Image
          source={require("../../public/img/menu.png")}
          style={{ height:  25, width: 25}}
        />
      </Pressable>
      <Modal
        visible={isShow}
        presentationStyle="overFullScreen"
        transparent={true}
        onRequestClose={() => setIsShow(false)}
      >
        <Pressable onPress={() => setIsShow(false)}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Pressable style={( state ) => (state.pressed && styles.pressed)} onPress={handlerDownload}>
                <Text style={styles.text}>Экспорт событий</Text>
            </Pressable>
            {needShowInfo && (
              <Pressable style={( state ) => (state.pressed && styles.pressed)} onPress={handlerPressCarInfo}>
              <Text style={styles.text}>Сведения об авто</Text>
            </Pressable>
            )}
            <Pressable style={( state ) => (state.pressed && styles.pressed)} onPress={handlerPressAddProblem}>
              <Text style={styles.text}>Добавить проблему</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
      <TextModal
        isShowModal={isShowModal}
        handlerCloseModal={() => setShowModal(false)}
        text={textProblem}
        onChangeText={(value) => setTextProblem(value)}
        handlerSaveModal={handlerAddProblem}
        title={'Проблема'}
        buttonTitle={'Добавить'}/>
    </View>
  );
};

export default DropDownMenu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: 'absolute',
    right: 0,
    top: 58,
    width: "50%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "#fff",
  },
  text: {
    height: 60,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  openMenuIcon: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pressed: {
    backgroundColor: colorGrey
  }
});

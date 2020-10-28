import React, {useState}  from "react";
import {View, Text, StyleSheet, TextInput, Modal, Pressable, Button, ScrollView} from "react-native";
import UiDataInput from "./ui/DataInput";
import UiInput from "./ui/Input";
import UiButton from "./ui/Button";
import axios from "axios";
import {colorBlack, colorGreen, colorGrey, colorPurple, colorRed, urlCar} from "../const";
import {handlerError, handlerSuccess} from "../const/handlerResponse";
import TextModal from "./TextModal";

const defaultOptions = {
    headerTitle: 'Новое событие',
    headerStyle: {
        backgroundColor: colorPurple,
    }
};

interface IEvents {
}

const Events: React.FunctionComponent<IEvents> = ({ navigation }) => {

    const [date, setDate] = useState(new Date());
    const [mileage, setMileage] = useState('');
    const [textInModal, setTextInModal] = useState('')
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [isShowModal, setShowModal] = useState(false);

    const onChangeDate = (value: Date) => {
        setDate(value);
    };

    const onChangeNumber = (value: string) => {
        const reg = /[а-яА-ЯёЁ]/g;
        if (value.search(reg) ===  -1) {
            setNumber(value);
        }
    };

    const handleChangeMileage = (value: string) => {
        if (value !== "0" && !isNaN(Number(value))) {
            setMileage(value);
        }
    };

    const openModal = () => {
      setTextInModal(text);
      setShowModal(true);
    };

    const handlerSaveModal = () => {
        setText(textInModal);
        setShowModal(false);
    };

    const handlerSubmit = () => {
        if (date && text) {
            const event: IEvents = { mileage: mileage, date: date, text: text };
            axios.post(`${urlCar}/add-events`, { number: number, event: event })
              .then((res) => handlerSuccess(
                navigation,
                res.data.message,
                defaultOptions
              ))
              .catch((err) =>
                  handlerError(
                    navigation,
                    err.response.data.message,
                    defaultOptions
                  ))
        }
    };


    return (
      <ScrollView indicatorStyle="black" contentContainerStyle={styles.container} keyboardDismissMode="on-drag">
          <Text style={[styles.wrapper, styles.h2]}>Добавить событие</Text>
          <View style={styles.number}>
              <UiInput title={'Номер'} placeholder={'A111AA'} onChangeText={onChangeNumber} value={number} keyboardType="default"/>
          </View>
          <UiInput title="Пробег" onChangeText={handleChangeMileage} value={mileage} descriptor="KM" placeholder="0"/>
          <UiDataInput title={'Дата'} onChangeData={onChangeDate} value={date}/>
          <Pressable style={(state) => (state.pressed ? [styles.text, styles.pressText] : styles.text)} onPress={openModal}>
              <Text>{ text ? text : 'Введите описание события' }</Text>
          </Pressable>
          <UiButton title="Добавить" onPress={handlerSubmit} style={styles.button}/>
          <TextModal
            isShowModal={isShowModal}
            handlerCloseModal={() => setShowModal(false)}
            text={textInModal}
            onChangeText={(value: string) => setTextInModal(value)}
            handlerSaveModal={handlerSaveModal}
            title={'Описание'}
            buttonTitle={'Сохранить'}
          />
      </ScrollView>
    )
};

export default Events;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#fff",
        minHeight: "100%",
        paddingTop: 40,
    },
    wrapper: {
        height: 80,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    wrapperLeft: {
        height: 80,
        width: "100%",
        marginLeft: 60,
        justifyContent: "center"
    },
    h2: {
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 20,
        height: 40,
    },
    number: {
        marginBottom: 50
    },
    button: {
        position: "absolute",
        bottom: 0
    },
    text: {
        fontSize: 16,
        width: "100%",
        minHeight: 100,
        marginTop: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: colorBlack,
        marginBottom: 100
    },
    pressText: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: colorGreen
    }
});

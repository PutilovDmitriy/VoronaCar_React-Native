import React, {useState} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {colorDarkGrey, dateFormat} from "../../const";
import DateTimePicker from '@react-native-community/datetimepicker';

interface IUiDataInputProps {
  title: string,
  onChangeData: (date: Date) => void,
  value: Date,
}

const UiDataInput: React.FC<IUiDataInputProps> = ({title, onChangeData, value}) => {
  const [show, setShow] = useState(false);

  const handlerChangeDate = (event, date: Date | undefined) => {
    setShow(false);
    if (date) {
      onChangeData(date);
    }
  };
  return (
    <Pressable onPress={() => setShow(true)}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{title}</Text>
          <Text>{ dateFormat(value, 'dd.mm.yyyy') }</Text>
        {show && (
          <DateTimePicker mode={'date'} value={value} onChange={handlerChangeDate}/>
        )}
      </View>
    </Pressable>
  )
};
const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorDarkGrey,
    paddingHorizontal: 20,
    borderColor: 'white',
    borderBottomWidth: 0.5
  },
  label: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold"
  },
  input: {
    width: 200,
    textAlign: "right",
  }

});
export default UiDataInput;

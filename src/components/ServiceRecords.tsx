import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import UiInput from "./ui/Input";
import UiDataInput from "./ui/DataInput";
import {useState} from "react";
import UiButton from "./ui/Button";
import {downloadFile} from "../const/downloadFile";
import {urlServiceRecords} from "../const";

interface IServiceRecordsProps {

}

const ServiceRecords: React.FunctionComponent<IServiceRecordsProps> = ({}) => {

  const [dateStart, setDateStart] = useState(new Date('2020-01-01'));
  const [dateEnd, setDateEnd] = useState(new Date());
  const [number, setNumber] = useState('');

  const onChangeDateStart = (value: Date) => {
    setDateStart(value)
  };

  const onChangeDateEnd = (value: Date) => {
    setDateEnd(value);
  };

  const onChangeNumber = (value: string) => {
    const reg = /[а-яА-ЯёЁ]/g;
    if (value.search(reg) ===  -1) {
      setNumber(value);
    }
  };

  const handlerSubmit = () => {
    if (dateStart && dateEnd) {
      const url = `${urlServiceRecords}/?start=${dateStart}&end=${dateEnd}&number=${number}`;
      downloadFile(url, 'Отчет обслуживания')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.wrapper, styles.h2]}>Отчет обслуживания</Text>
      <UiDataInput title={'Дата начала'} onChangeData={onChangeDateStart} value={dateStart}/>
      <UiDataInput title={'Дата окончания'} onChangeData={onChangeDateEnd} value={dateEnd}/>
      <View style={styles.number}>
        <UiInput title={'Номер'} placeholder={'A111AA'} onChangeText={onChangeNumber} value={number} keyboardType="default"/>
      </View>
      <UiButton title="Скачать" onPress={handlerSubmit} style={styles.button}/>
    </View>
  )
};

export default ServiceRecords;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
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
    marginTop: 100
  },
  button: {
    position: "absolute",
    bottom: 0
  },
});

import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { urlsProblem, problemsItem, colorGreen } from "../const";
import { ProblemKey } from "../types/Car";
import RouterContext from "../contexts/RouterContext";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ModalComments from "./ModalComments";

interface IAppProps {
  navigation: any;
  route: any;
}

const Car: React.FC<IAppProps> = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title === "" ? "Car" : route.params.title,
    });
    setProblems(route.params.problem);
    setComments(route.params.comments);
  }, [navigation, route.params.title]);

  const [value, setValue] = React.useState<string>("");
  const [wash, setWash] = React.useState<string>("");
  const [problems, setProblems] = React.useState<ProblemKey[]>([]);
  const [comments, setComments] = React.useState("");
  const [isModalComments, setModalCommenst] = React.useState(false);
  const number: string = route.params.title;

  const { serviceCar, shiftId, shiftUpdate, voronaMinus } = React.useContext(
    RouterContext
  );

  const handleChangeValue = (text: string) => {
    if (text !== "0" && !isNaN(Number(text))) {
      setValue(text);
    }
  };

  const handleChangeWash = (text: string) => {
    if (text !== "0" && !isNaN(Number(text))) {
      setWash(text);
    }
  };

  const handleChangeProblems = (items: ProblemKey[]) => {
    setProblems(items);
  };

  const handleSubmit = () => {
    serviceCar && serviceCar(number, problems, comments);
    voronaMinus && voronaMinus(Number(value));
    shiftUpdate &&
      shiftUpdate({
        shiftId: shiftId ? shiftId : "0",
        carNumber: number,
        value: value,
        money: wash,
      });
    navigation.goBack();
  };

  const selectedText = () => {
    const number = problems.length;
    const titles = ["проблема", "проблемы", "проблем"];
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  return (
    <View style={styles.container}>
      <View style={styles.problem}>
        {problems.map((item, index) => (
          <Image
            key={index}
            source={urlsProblem(item)}
            style={{ width: 40, height: 40 }}
          />
        ))}
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Заправка</Text>
        <TextInput
          style={styles.input}
          placeholder="Литры"
          keyboardType="number-pad"
          value={value}
          onChangeText={handleChangeValue}
        />
        <Text style={styles.label}>Мойка</Text>
        <TextInput
          style={styles.input}
          placeholder="Сумма"
          keyboardType="number-pad"
          value={wash}
          onChangeText={handleChangeWash}
        />
        <View style={styles.select}>
          <SectionedMultiSelect
            items={problemsItem}
            uniqueKey="id"
            selectText="Укажи проблемы..."
            onSelectedItemsChange={handleChangeProblems}
            hideSearch={true}
            selectedItems={problems}
            selectedText={selectedText()}
            confirmText="Подтвердить"
            colors={{ primary: colorGreen }}
          />
        </View>
        <View style={styles.label}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => setModalCommenst(true)}
          >
            <View style={styles.lineComments}>
              <Text style={styles.lableComments}>Комментарий:</Text>
              <Image
                source={require("../../public/img/edit.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ alignSelf: "flex-start", fontSize: 16 }}>
          {comments}
        </Text>
        <View style={styles.button}>
          <Button title="Отправить" onPress={handleSubmit} color={colorGreen} />
        </View>
      </View>
      <ModalComments
        isModal={isModalComments}
        closeModal={() => setModalCommenst(false)}
        comments={comments}
        handleChangeComments={(text) => {
          setComments(text);
        }}
      />
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "95%",
    alignItems: "center",
    marginTop: -70,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: "15%",
  },
  input: {
    width: "100%",
    fontSize: 20,
    paddingLeft: "15%",
    borderBottomColor: "#333",
    borderBottomWidth: 2,
  },
  problem: {
    position: "absolute",
    top: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: 50,
  },
  select: {
    marginTop: 25,
    width: "100%",
    borderWidth: 2,
    borderColor: "#333",
  },
  lineComments: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-start",
  },
  lableComments: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 15,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
});

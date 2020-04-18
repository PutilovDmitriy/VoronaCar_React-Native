import React from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { urlsProblem, problemsItem } from "../const";
import { Problem, ProblemKey } from "../types/Car";
import RouterContext from "../contexts/RouterContext";

interface IAppProps {
  navigation: any;
  route: any;
}

const Car: React.FC<IAppProps> = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title === "" ? "Car" : route.params.title,
    });
  }, [navigation, route.params.title]);

  const [value, setValue] = React.useState<string>();
  const [wash, setWash] = React.useState<string>();
  const [problems, setProblems] = React.useState<ProblemKey[]>([]);
  const number: string = route.params.title;
  const problemS: ProblemKey[] = route.params.problem;

  const { serviceCar } = React.useContext(RouterContext);

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
    serviceCar && serviceCar(number, problems);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.problem}>
        {problemS.map((item, index) => (
          <Image
            key={index}
            source={urlsProblem(item)}
            style={{ width: 40, height: 40 }}
          />
        ))}
      </View>
      <View style={styles.form}>
        <Text>Заправка</Text>
        <TextInput
          style={styles.input}
          placeholder="Литры"
          keyboardType="number-pad"
          value={value}
          onChangeText={handleChangeValue}
        />
        <Text>Мойка</Text>
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
          />
        </View>
        <Button title="Отправить" onPress={handleSubmit} />
      </View>
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
    alignItems: "center",
  },
  input: {
    width: 100,
    borderBottomColor: "black",
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
    width: 200,
  },
});

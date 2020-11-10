import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity, ScrollView, Pressable
} from "react-native";
import {colorBlack, colorDarkGrey, colorGreen, colorGrey, dateFormat} from "../const";
import RouterContext from "../contexts/RouterContext";
import {RouteProp} from "@react-navigation/native";
import {RoutesParamList} from "../types/RoutesParamList";
import UiButton from "./ui/Button";
import UiInput from "./ui/Input";
import TextModal from "./TextModal";

interface IAppProps {
  navigation: any;
  route: RouteProp<RoutesParamList, "Car">;
}

const Car: React.FC<IAppProps> = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        route.params.car.number === "" ? "Car" : route.params.car.number,
    });
    setProblems(route.params.car.problems.map((problem, idx) => ({ id: idx, text: problem, resolved: false })));
  }, [navigation, route.params.car]);

  const [valueOil, setValueOil] = useState<string>("");
  const [wash, setWash] = useState<string>("");
  const [problems, setProblems] = useState<{id: number, text: string, resolved: boolean}[]>([]);
  const number: string = route.params.car.number;
  const lastWashDate = route.params.car.lastWashDate;
  const [gasStation, setGasStation] = useState<boolean>(false);
  const [showProblems, setShowProblems] = useState<boolean>(false);
  const [spinValue,] = useState(new Animated.Value(0));
  const [isShowModal, setShowModal] = useState(false);
  const [newProblem, setNewProblem] = useState('');
  const [washFromVorona, setWashFromVorona] = useState(false);

  const {serviceCar, shiftId, shiftUpdate, voronaMinus} = React.useContext(
    RouterContext
  );

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const handleChangeValue = (text: string) => {
    if (text !== "0" && !isNaN(Number(text))) {
      setValueOil(text);
    }
  };

  const handleChangeWash = (text: string) => {
    if (text !== "0" && !isNaN(Number(text))) {
      setWash(text);
    }
  };
  const toggleProblems = () => {
    setShowProblems(!showProblems);
    Animated.timing(
      spinValue,
      {
        toValue: showProblems ? 0 : 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
  };

  const handleSubmit = () => {
    const problemsData = problems
      .filter((problem) => !problem.resolved)
      .map((problem) => problem.text);
    serviceCar && serviceCar(number, problemsData, !!wash.trim() || washFromVorona);
    if (!gasStation) {
      voronaMinus && voronaMinus(Number(valueOil));
    }
    shiftUpdate &&
    shiftUpdate({
      shiftId: shiftId ? shiftId : "0",
      carNumber: number,
      value: Number(valueOil),
      fromGS: gasStation,
      money: wash,
    });
    navigation.goBack();
  };

  const openProblemModal = () => {
    setNewProblem('');
    setShowModal(true);
  };

  const getIdProblem = (): number => {
    let id = 1;
    problems.forEach((problem) => {
      if (id <= problem.id) {
        id = problem.id + 1;
      }
    });
    return id;
  };


  const handlerSaveNewProblem = () => {
    setShowModal(false);
    if (newProblem) {
      const id = getIdProblem();
      problems.push({ id: id, text: newProblem, resolved: false});
    }
    setNewProblem('');
  };

  const handlerResolveProblem = (id: number) => {
    const editProblem = problems.find((probl) => probl.id == id);
    if (editProblem) {
      const idx = problems.findIndex((probl) => probl.id == id);
      editProblem.resolved = !editProblem.resolved;
      const newProblems = [...problems.slice(0, idx), editProblem, ...problems.slice(idx + 1)];
      setProblems(newProblems);
    }
  };

  const changeWashFromVorona = () => {
    setWashFromVorona(!washFromVorona);
  };

  const changeGasStation = () => {
    setGasStation(!gasStation);
  }

  return (
    <ScrollView indicatorStyle="black" contentContainerStyle={styles.container} keyboardDismissMode="on-drag">
      <Text style={[styles.wrapper, styles.h2]}>Обслуживание автомобиля</Text>
      <UiInput title="Заправка" onChangeText={handleChangeValue} value={valueOil} descriptor="Л" placeholder="0.0"/>
      <Pressable
          onLongPress={changeGasStation}
          style={gasStation ? [styles.thinButton, { backgroundColor: colorGreen }] : styles.thinButton}
      >
        <Text>Заправка с АЗС</Text>
      </Pressable>
      <UiInput title="Мойка" onChangeText={handleChangeWash} value={wash} descriptor="РУБ." placeholder="0.0"/>
      <Pressable
        onLongPress={changeWashFromVorona}
        style={washFromVorona ? [styles.thinButton, { backgroundColor: colorGreen }] : styles.thinButton}
      >
        <Text>Мойка из ведра</Text>
      </Pressable>
    {lastWashDate && (
        <View style={styles.wrapperLeft}>
          <Text style={styles.h3}>Дата последней мойки:</Text>
          <Text style={styles.h3}>
            {dateFormat(new Date(lastWashDate), "dd.mm.yyyy", true)}
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={toggleProblems} activeOpacity={1} style={{width: "100%"}}>
          <View style={[styles.wrapper, styles.problems]}>
             <Text style={styles.label}>ПРОБЛЕМЫ</Text>
        <Animated.Image
              style={[styles.arrow, {transform: [{rotate: spin}]}]}
              source={require("../../public/img/arrow-down.png")}
        />
          </View>
      </TouchableOpacity>
      {showProblems && (
        <View style={styles.problemsContainer}>
          <Pressable style={[styles.thinButton, { backgroundColor: colorGreen }]} onPress={openProblemModal}>
            <Text style={styles.label}>Добавить проблему</Text>
          </Pressable>
          <View>
            { problems.map((problem) =>
            <TouchableOpacity key={problem.id} onPress={() => handlerResolveProblem(problem.id)}>
              <Text style={[styles.problem, problem.resolved && styles.problemResolved]}>— {problem.text}</Text>
            </TouchableOpacity>) }
          </View>
          <TextModal
            isShowModal={isShowModal}
            handlerCloseModal={() => setShowModal(false)}
            text={newProblem}
            onChangeText={text => setNewProblem(text)}
            handlerSaveModal={handlerSaveNewProblem}
            title={'Проблема'}
            buttonTitle={'Добавить'}/>
        </View>

      )}
      <UiButton title="Сохранить" onPress={handleSubmit} style={styles.button}/>
    </ScrollView>
  );
};

export default Car;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: '100%',
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 100
  },
  button: {
    position: "absolute",
    bottom: 0
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
  h3: {
    paddingLeft: "3%",
    fontSize: 16,
    fontWeight: "500",
  },
  lastWashDate: {
    fontSize: 16,
    marginTop: 26,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: "15%",
  },
  arrow: {
    height: 20,
    width: 20
  },
  problems: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorDarkGrey,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  problem: {
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: colorBlack
  },
  problemResolved: {
    color: colorDarkGrey,
    textDecorationLine: "line-through",
  },
  thinButton: {
    backgroundColor: colorGrey,
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  problemsContainer: {
    width: '100%',
    alignItems: 'center'
  },
});

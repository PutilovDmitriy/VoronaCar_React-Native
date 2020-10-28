import React, { useCallback, useEffect, } from "react";
import {View, StyleSheet, RefreshControl, FlatList} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RoutesParamList } from "../types/RoutesParamList";
import CarLine from "./CarLine";
import { Car } from "../types/Car";
import { Circle } from "react-native-animated-spinkit";
import { colorGreen } from "../const";
import ModalOil from "./ModalOil";

interface HomeProps {
  navigation: StackNavigationProp<RoutesParamList>;
  carData: Car[];
  loading: boolean;
  error: any;
  getCarInfo: () => void;
  shiftActive: boolean;
}

const Home: React.FC<HomeProps> = ({
  navigation,
  carData,
  loading,
  getCarInfo,
  shiftActive
}) => {
  const [firstFetch, setFirstFetch] = React.useState<boolean>(true);
  const initFetch = useCallback(() => {
    getCarInfo();
  }, [getCarInfo]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const updateList = () => {
    setFirstFetch(false);
    initFetch();
  };

  const getUrl = () => {
    return shiftActive ? 'Car' : 'CarInfo';
  };

  return loading && firstFetch ? (
    <View style={styles.loading}>
      <Circle size={100} color={colorGreen} />
    </View>
  ) : (
    <View>
      <FlatList
        data={carData}
        renderItem={({ item }) => (
          <CarLine
            carInfo={item}
            navigation={() => {
              navigation.navigate(getUrl(), {
                car: item,
              });
            }}
          />
        )}
        keyExtractor={(item) => item.number}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={updateList} />}
      />
      <ModalOil />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

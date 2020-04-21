import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, StyleSheet, Animated } from "react-native";
import { colorGreen } from "../const";
import RouterContext from "../contexts/RouterContext";
import { ProblemKey } from "../types/Car";

interface Props {
  number: string;
  problems: ProblemKey[];
}

const SwipeWrapper: React.FC<Props> = ({ number, problems, children }) => {
  const { serviceCar } = React.useContext(RouterContext);
  const swipeableEl = React.useRef<Swipeable>(null);

  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [1, 0, 0, 0],
    });
    return (
      <View style={styles.rightAction}>
        <Animated.Image
          style={[
            styles.img,
            {
              transform: [{ scale: trans }],
            },
          ]}
          source={require("../../public/img/skip.png")}
        />
      </View>
    );
  };

  const skipCar = () => {
    setTimeout(() => {
      if (swipeableEl !== null && swipeableEl.current !== null) {
        swipeableEl.current.close();
      }
    }, 2000);
    serviceCar && serviceCar(number, problems);
  };
  return (
    <Swipeable
      overshootLeft={false}
      renderRightActions={renderRightActions}
      overshootFriction={30}
      onSwipeableWillOpen={skipCar}
      ref={swipeableEl}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeWrapper;

const styles = StyleSheet.create({
  rightAction: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: colorGreen,
    justifyContent: "flex-end",
  },
  img: {
    width: 4,
    height: 4,
    marginRight: 30,
  },
});

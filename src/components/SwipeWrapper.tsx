import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { View, StyleSheet, Text, Animated, Image } from "react-native";
import { colorGren } from "../const";

interface Props {}

const SwipeWrapper: React.FC<Props> = props => {
  const renderRightActions = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [1, 0, 0, 0]
    });
    return (
      <View style={styles.rightAction}>
        <Animated.Image
          style={[
            styles.img,
            {
              transform: [{ scale: trans }]
            }
          ]}
          source={require("../../public/img/skip.png")}
        />
      </View>
    );
  };

  const skipCar = () => {};
  return (
    <Swipeable
      overshootLeft={false}
      renderRightActions={renderRightActions}
      overshootFriction={30}
      onSwipeableWillOpen={skipCar}
    >
      {props.children}
    </Swipeable>
  );
};

export default SwipeWrapper;

const styles = StyleSheet.create({
  rightAction: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: colorGren,
    justifyContent: "flex-end"
  },
  img: {
    width: 4,
    height: 4,
    marginRight: 30
  }
});

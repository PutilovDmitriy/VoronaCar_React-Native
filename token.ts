const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("TOKEN");
    if (value !== null) {
      const decoded = jwt_decoded(value);
      console.log(decoded);
    }
  } catch (error) {}
};

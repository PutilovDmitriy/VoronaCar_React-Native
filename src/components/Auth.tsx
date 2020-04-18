import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Info } from "../types/UserInfo";
import { Flow } from "react-native-animated-spinkit";
import { colorGren } from "../const";

interface IAppProps {
  userInfo: Info;
  loading: boolean;
  error: any;
  userAuthorize: (login: string, password: string) => void;
}

const Auth: React.FC<IAppProps> = ({ userAuthorize, loading, error }) => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValid, setValid] = React.useState(false);

  React.useEffect(() => {
    updateValid();
  }, [login, password]);

  const updateValid = () => {
    if (login.length === 11 && password !== "") {
      setValid(true);
    } else setValid(false);
  };

  const logIn = () => {
    userAuthorize(login, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Логин"
        autoCompleteType="tel"
        keyboardType="number-pad"
        maxLength={11}
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        autoCompleteType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={styles.error}>Неверный логин или пароль</Text>}

      {!loading ? (
        <Button
          title=" Войти "
          onPress={logIn}
          disabled={!isValid}
          color="#3949ab"
        />
      ) : (
        <View style={styles.loading}>
          <Flow size={30} color="#fff" />
        </View>
      )}
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    borderStyle: "solid",
    fontSize: 20,
    marginBottom: 10,
    width: "60%",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  loading: {
    backgroundColor: "#3949ab",
    height: 35,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

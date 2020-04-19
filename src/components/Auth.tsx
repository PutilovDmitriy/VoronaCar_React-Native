import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Info } from "../types/UserInfo";
import { Flow } from "react-native-animated-spinkit";
import { colorGreen, colorDarkGreen, colorRed } from "../const";

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
        <View style={styles.button}>
          <Button
            title="Войти"
            onPress={logIn}
            disabled={!isValid}
            color={colorDarkGreen}
          />
        </View>
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
    paddingLeft: 30,
    width: "95%",
    marginVertical: 20,
  },
  button: {
    width: "95%",
    marginTop: 20,
  },
  error: {
    color: colorRed,
    marginBottom: 10,
  },
  loading: {
    backgroundColor: colorDarkGreen,
    marginTop: 20,
    height: 35,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});

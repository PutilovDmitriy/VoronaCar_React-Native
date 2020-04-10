import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import { UserLog } from "../types/UserLog";
import { Info } from "../types/Info";

interface IAppProps {
  userInfo: Info;
  loading: boolean;
  error: any;
  userAuthorize: (userLog: UserLog) => void;
}

const Auth: React.FC<IAppProps> = ({ userAuthorize, loading, error }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(false);

  const updateValid = () => {
    if (login.length === 11 && password !== "") {
      setValid(true);
    } else setValid(false);
  };

  const logIn = () => {
    userAuthorize({
      login,
      password
    });
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Логин"
        autoCompleteType="tel"
        keyboardType="number-pad"
        maxLength={11}
        value={login}
        onChangeText={setLogin}
        onChange={updateValid}
      />
      <TextInput
        style={style.input}
        placeholder="Пароль"
        autoCompleteType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        onChange={updateValid}
      />
      {error && <Text style={style.error}>Неверный логин или пароль</Text>}
      <Button title=" Войти " onPress={logIn} disabled={!isValid} />
    </View>
  );
};

export default Auth;

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80%"
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    borderStyle: "solid",
    fontSize: 20,
    marginBottom: 10,
    width: "60%"
  },
  error: {
    color: "red",
    marginBottom: 10
  }
});

import { Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";

import useAuth from "../../hooks/useAuth";

import { CustomButton } from "../../components/CustomButton";
import useStyles from "./styles";
import { CustomInput } from "../../components/CustomInput";
import { Separator } from "../../components/Separator";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";

function Signin({ navigation }: { navigation: NavigationProp<any> }): JSX.Element {
  const styles = useStyles()

  const { login } = useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisible, setPasswordVisible] = useState(false)

  function changePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  function verifyFields() {
    return username.length > 0 && password.length > 0
  }

  async function handleSignin() {
    if (!verifyFields()) {
      return showMessage({
        message: "Preencha todos os campos",
        type: "warning"
      })
    }

    const success = await login(username, password)

    if (success) {
      navigation.navigate("Home")
    } else {
      showMessage({
        message: "Usuário ou senha inválidos",
        type: "danger"
      })
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.flex} />

      <CustomInput
        value={username}
        onChangeText={setUsername}
        label="Usuário"
        placeholder="Digite aqui seu usuário"
      />

      <Separator />

      <CustomInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite aqui sua senha"
        secureTextEntry={!passwordVisible}
        iconName={passwordVisible ? 'eye-off' : 'eye'}
        iconOnPress={changePasswordVisibility}
      />

      <Separator full />

      <CustomButton
        title="Signin"
        onPress={handleSignin}
      />
    </View>
  )
}

export default Signin